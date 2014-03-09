from google.appengine.api import users

from config import config
from models import Module, Account

# For Views:
# Retrieves basic info, completes a session check.


def basicinfo(user, self):
    if user:
        url = users.create_logout_url(self.request.uri)
        url_linktext = 'Logout'
        nickname = user.nickname()
        accounts = Account.query(Account.guser == user).fetch()

        if len(accounts) == 0:  # if no Account object exists for user
            new_account = Account(
                guser=user,
                modules_completed=[],
                projects_completed=[]
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

# For Controllers:
# Completes session check without redirecting for login on no session.


def get_account():
    user = users.get_current_user()
    if user:
        accounts = Account.query(Account.guser == user).fetch()
        if len(accounts) > 0:
            account = accounts[0]
            return account
    return None
