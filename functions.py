from google.appengine.api import users

from config import config
from freelancer import job_api_calls, oauth
from models import Module, Account

# Helper Functions

def freelancer_auth(self):
    consumer = (config.CONSUMER_KEY, config.CONSUMER_SECRET)
    fr_oauth = oauth.FreelancerOauth(consumer)
    request_tokens = fr_oauth.get_request_token(
        oauth_callback= config.WEBSITE + '?', 
        domain=config.SANDBOX
    )        
    redirect_to = fr_oauth.get_authorize_url(app_url=config.SANDBOX_APP)
    self.redirect(redirect_to)

def get_access_token(self):
    consumer = (config.CONSUMER_KEY, config.CONSUMER_SECRET)
    fr_oauth = oauth.FreelancerOauth(consumer)
    oauth_token = self.request.get('oauth_token')
    oauth_verifier = self.request.get('oauth_verifier')

    if oauth_token and oauth_verifier:
        oauth_token, oauth_verifier = str(oauth_token), str(oauth_verifier)
        access_token = fr_oauth.upgrade_to_access_token(
            oauth_verifier, 
            request_token=oauth_token,
            domain=config.SANDBOX
        )
        return access_token
    else:
        print 'oauth_token and oauth_verifier DONT exist'

def basicinfo(user, self):
    # retrieves basic info, completes a session check
    if user:
        url = users.create_logout_url(self.request.uri)
        url_linktext = 'Logout'
        nickname = user.nickname()
        accounts = Account.query(Account.guser == user).fetch()

        if len(accounts) == 0: # if no Account object exists for user
            fr_at = get_access_token(self)
            if fr_at is None: # if user has not gone thru freelancer OAuth
                freelancer_auth(self)
            else: 
                new_account = Account(
                    guser=user, 
                    freelancer_at_key=fr_at[0], 
                    freelancer_at_secret=fr_at[1],
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
