# MODELS

import os
import urllib
import json

import urlparse

from google.appengine.api import users
from google.appengine.ext import ndb

import jinja2
import webapp2

from config import config
from freelancer import job_api_calls, oauth
from ocw import youtube
from ocw import ocwsearch


JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

# DEFAULT_GUESTBOOK_NAME = 'default_guestbook'


# We set a parent key on the 'Greetings' to ensure that they are all in the same
# entity group. Queries across the single entity group will be consistent.
# However, the write rate should be limited to ~1/second.

'''
def guestbook_key(guestbook_name=DEFAULT_GUESTBOOK_NAME):
    """Constructs a Datastore key for a Guestbook entity with guestbook_name."""
    return ndb.Key('Guestbook', guestbook_name)


class Greeting(ndb.Model):
    """Models an individual Guestbook entry with author, content, and date."""
    author = ndb.UserProperty()
    content = ndb.StringProperty(indexed=False)
    date = ndb.DateTimeProperty(auto_now_add=True)
'''

# Database Models

class ModelUtils(object):

    def to_dict(self):
        result = super(ModelUtils,self).to_dict()
        result['key'] = self.key.id()
        return result

class Module(ModelUtils, ndb.Model):
    name = ndb.StringProperty()
    youtube = ndb.StringProperty(repeated=True) # youtube playlist/video ids
    yt_type = ndb.StringProperty() # whether it's a YT playlist/video
    courses = ndb.JsonProperty(repeated=True) # OCW courses
    category = ndb.IntegerProperty()  # freelancer category id

class Account(ModelUtils, ndb.Model):
    guser = ndb.UserProperty()
    freelancer_at_key = ndb.StringProperty() # freelancer access token key
    freelancer_at_secret = ndb.StringProperty() # freelancer access token secret
    tutorials_completed = ndb.IntegerProperty(repeated=True) # module ids
    jobs_completed = ndb.IntegerProperty(repeated=True) # freelancer.com job ids

# Helper Functions

def freelancer_auth(self):
    # 8c6f443fdaba9bd20f16beaaa5993ea3f4be11b2
    # 86b4bde9ad3dfcc8ae086ddf20874ac85036aaa8
    consumer = (config.CONSUMER_KEY, config.CONSUMER_SECRET)
    fr_oauth = oauth.FreelancerOauth(consumer)
    request_tokens = fr_oauth.get_request_token(
        oauth_callback= config.WEBSITE + '?', 
        domain=config.SANDBOX
    )    
    print 'request_tokens:'
    print request_tokens
    
    redirect_to = fr_oauth.get_authorize_url(app_url=config.SANDBOX_APP)
    print redirect_to

    #redirect_to = oauth.get_authorize_url(consumer, config.WEBSITE + '?', \
    #    config.SANDBOX_APP, domain=config.SANDBOX)
    #print 'redirect_to'
    #print redirect_to
    #parsed = urlparse.urlparse(redirect_to)
    #oauth_token = urlparse.parse_qs(parsed.query)['oauth_token'][0]
    #print 'oauth_token'
    #print oauth_token
    
    # self.redirect(redirect_to)
    #verifier = '7bd8e8c177544d2b91b8c5a012e45983a096d18a'
    #access_token = oauth.get_access_token(consumer, oauth_token, verifier, domain=config.SANDBOX)
    #print 'access_token'
    #print access_token

def get_access_token(self):
    print 'here in get_access_token'
    consumer = (config.CONSUMER_KEY, config.CONSUMER_SECRET)
    fr_oauth = oauth.FreelancerOauth(consumer)
    oauth_token = self.request.get('oauth_token')
    oauth_verifier = self.request.get('oauth_verifier')
    if oauth_token and oauth_verifier:
        oauth_token, oauth_verifier = str(oauth_token), str(oauth_verifier)
        print 'oauth_token and verif exist'
        
        # re-get request token
        request_tokens = fr_oauth.get_request_token(
            oauth_callback= config.WEBSITE + '?', 
            domain=config.SANDBOX
        ) 
        print 'request_tokens'
        request_token = request_tokens[0]
        #access_token = oauth.get_access_token(consumer, request_token, oauth_verifier)
        access_token = fr_oauth.upgrade_to_access_token(
            oauth_verifier, 
            request_token,
            domain=config.SANDBOX
        )
        print 'ACCESS TOKEN'
        print access_token
    else:
        print 'oauth_token and verif DONT exist'

def basicinfo(user, self):
    # retrieves basic info, completes a session check
    if user:
        url = users.create_logout_url(self.request.uri)
        url_linktext = 'Logout'
        nickname = user.nickname()
        accounts = Account.query(Account.guser == user).fetch()
        if len(accounts) == 0: # if no Account object exists for user
            fr_at = get_access_token(self)
            if fr_at is None: # if user has not gone through freelancer OAuth
                print 'No Account and no freelancer OAuth'
                freelancer_auth(self)
            else:    
                new_account = Account(
                    guser=user, 
                    freelancer_at=fr_at, 
                    tutorials_completed=[], 
                    jobs_completed=[]
                )
                new_account.put()
    else:
        url = users.create_login_url(self.request.uri)
        url_linktext = 'Login'
        nickname = None

    template_values = {
        'title': config.SITE_NAME,
        'url': url,
        'url_linktext': url_linktext,
        'nickname': nickname
    }
    return template_values

# Views Classes

class MainPage(webapp2.RequestHandler):

    def get(self):
        '''
        guestbook_name = self.request.get('guestbook_name',
                                          DEFAULT_GUESTBOOK_NAME)
        greetings_query = Greeting.query(
            ancestor=guestbook_key(guestbook_name)).order(-Greeting.date)
        greetings = greetings_query.fetch(10)

        template_values = {
            'greetings': greetings,
            'guestbook_name': urllib.quote_plus(guestbook_name),
            'url': url,
            'url_linktext': url_linktext,
        }
        ''' 
        template_values = basicinfo(users.get_current_user(), self)
        template = JINJA_ENVIRONMENT.get_template('templates/index.html')
        self.response.write(template.render(template_values))

class AboutPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'About'    
        template = JINJA_ENVIRONMENT.get_template('templates/about.html')
        self.response.write(template.render(template_values))

class TeamPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Team'    
        template = JINJA_ENVIRONMENT.get_template('templates/team.html')
        self.response.write(template.render(template_values))

class ModulesPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Modules'    
        mi = ModulesInfo()
        template_values['modules'] = sorted(mi.get_modules(), key = lambda module: module['name'])
        template = JINJA_ENVIRONMENT.get_template('templates/modules.html')
        self.response.write(template.render(template_values))

class ModulePage(webapp2.RequestHandler):

    def get(self, module_id):
        template_values = basicinfo(users.get_current_user(), self)
        mi = ModuleInfo()
        module = mi.get_info(module_id)
        print 'module'
        print module
        template_values['title'] = module['name']
        template_values['name'] = module['name']
        template_values['youtube'] = module['youtube']
        template_values['yt_type'] = module['yt_type']
        template_values['courses'] = module['courses']
        template_values['category'] = module['category']
        template = JINJA_ENVIRONMENT.get_template('templates/module.html')
        self.response.write(template.render(template_values))

# Info Classes (JSON response)

class AccountInfo(webapp2.RequestHandler):

    def get(self, account_id):
        account_id = int(account_id)
        account = Account.get_by_id(account_id)
        info = {
            'nickname': account.guser.nickname(),
            'email': account.guser.email(),
            'id': account.guser.user_id(),
            'jobs_completed': account.jobs_completed,
            'tutorials_completed': account.tutorials_completed
        }
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(info)) 

class ModuleInfo(webapp2.RequestHandler):

    def get_info(self, module_id):
        module_id = int(module_id)
        module = Module.get_by_id(module_id)
        info = {
            'name': module.name,
            'youtube': module.youtube,
            'yt_type': module.yt_type,
            'courses': module.courses,
            'category': module.category
        }
        return info

    def get(self, module_id):
        info = self.get_info(module_id)
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(info)) 

class ModulesInfo(webapp2.RequestHandler):

    def get_modules(self):
        return [m.to_dict() for m in Module.query().fetch()]

    def get(self):
        modules = self.get_modules()
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(modules)) 

# Action Classes (JSON response)

class UpdateModules(webapp2.RequestHandler):

    def get(self):
        jac = job_api_calls.JobApiCalls()
        categories = jac.get_categories()
        y = youtube.Youtube()
        ocws = ocwsearch.OCWSearch()
        for c in categories:
            # retrieve items from API's
            c_id = int(c['id'])
            name = c['name']
            search_name = name + " tutorial"
            y_list, y_type = y.search(search_name)
            course_list = ocws.search(name)
            # store/update as needed
            match = Module.query(Module.category == c_id).fetch()
            module = Module(name=name, youtube=y_list, yt_type=y_type, courses=course_list, category=c_id)
            if len(match) == 0:        
                module.put()
            else:
                match = match[0]
                if  str(match.name) != name or str(match.yt_type) != y_type or match.youtube != y_list or match.courses != course_list:
                    print 'module different'
                    match.name = name
                    match.youtube = y_list
                    match.yt_type = y_type
                    match.courses = course_list
                    match.put()
                    # break
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(categories)) 

'''
class Guestbook(webapp2.RequestHandler):

    def post(self):
        # We set the same parent key on the 'Greeting' to ensure each Greeting
        # is in the same entity group. Queries across the single entity group
        # will be consistent. However, the write rate to a single entity group
        # should be limited to ~1/second.
        guestbook_name = self.request.get('guestbook_name',
                                          DEFAULT_GUESTBOOK_NAME)
        greeting = Greeting(parent=guestbook_key(guestbook_name))

        if users.get_current_user():
            greeting.author = users.get_current_user()

        greeting.content = self.request.get('content')
        greeting.put()

        query_params = {'guestbook_name': guestbook_name}
        self.redirect('/?' + urllib.urlencode(query_params))
'''

application = webapp2.WSGIApplication([
    # Views
    webapp2.Route('/', handler=MainPage, name='main'),
    webapp2.Route('/about', handler=AboutPage, name='about'),
    webapp2.Route('/team', handler=TeamPage, name='team'),
    webapp2.Route('/modules', handler=ModulesPage, name='modules'),
    webapp2.Route('/<module_id:\d+>', handler=ModulePage, name='module'),
    # ('/sign', Guestbook),
    
    # Info
    webapp2.Route('/accountinfo/<account_id:\d+>', handler=AccountInfo, name='account'),
    webapp2.Route('/moduleinfo/<module_id:\d+>', handler=ModuleInfo, name='module'),
    webapp2.Route('/modulesinfo', handler=ModulesInfo, name='modules'),

    # Actions
    webapp2.Route('/updatemodules', handler=UpdateModules, name='updatemodules'),
], debug=True)
