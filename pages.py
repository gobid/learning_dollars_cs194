import webapp2
import jinja2
import os

from google.appengine.api import users
from google.appengine.ext import ndb

from config import config
from models import Module, Account
from functions import freelancer_auth, get_access_token, basicinfo
from info import AccountInfo, ModuleInfo, ModulesInfo

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

# Views Classes

class MainPage(webapp2.RequestHandler):

    def get(self):
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
        template_values['modules'] = sorted(
            mi.get_modules(), 
            key = lambda module: module['name'].lower()
        )
        template = JINJA_ENVIRONMENT.get_template('templates/modules.html')
        self.response.write(template.render(template_values))

class ModulePage(webapp2.RequestHandler):

    def get(self, module_id):
        template_values = basicinfo(users.get_current_user(), self)
        mi = ModuleInfo()
        module = mi.get_info(module_id)
        template_values['title'] = module['name']
        template_values['name'] = module['name']
        template_values['youtube'] = module['youtube']
        template_values['yt_type'] = module['yt_type']
        template_values['courses'] = module['courses']
        template_values['category'] = module['category']
        template_values['jobs'] = module['jobs']
        template = JINJA_ENVIRONMENT.get_template('templates/module.html')
        self.response.write(template.render(template_values))

class DashboardPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Dashboard'    
        template = JINJA_ENVIRONMENT.get_template('templates/dashboard.html')
        self.response.write(template.render(template_values))

class MailboxPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Mailbox'
        template = JINJA_ENVIRONMENT.get_template('templates/mailbox.html')
        self.respose.write(template.render(template_values))

class MyBidsPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Mybids'
        template = JINJA_ENVIRONMENT.get_template('templates/mybids.html')
        self.respose.write(template.render(template_values))

class MyPostsPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Myposts'
        template = JINJA_ENVIRONMENT.get_template('templates/myposts.html')
        self.respose.write(template.render(template_values))

class MilestonesPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Milestones'
        template = JINJA_ENVIRONMENT.get_template('templates/milestones.html')
        self.respose.write(template.render(template_values))

