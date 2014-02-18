import os
import webapp2
from webapp2_extras import jinja2
import pyjade

from google.appengine.api import users
from google.appengine.ext import ndb

from config import config
from models import Module, Account
from functions import freelancer_auth, get_access_token, basicinfo
from info import AccountInfo, ModuleInfo, ModulesInfo

'''JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)'''

# https://github.com/SyrusAkbary/pyjade.git


def jade_factory(app):
    j = jinja2.Jinja2(app)
    j.environment.add_extension('pyjade.ext.jinja.PyJadeExtension')
    return j

# Per http://goo.gl/n9AbT7


class JadeHandler(webapp2.RequestHandler):
    # Per http://stackoverflow.com/a/7081653/87990

    @staticmethod
    def jade_factory(app):
        j = jinja2.Jinja2(app)
        j.environment.add_extension('pyjade.ext.jinja.PyJadeExtension')
        return j

    @webapp2.cached_property
    def jinja2(self):
        return jinja2.get_jinja2(app=self.app, factory=JadeHandler.jade_factory)

    def render_response(self, _template, **context):
        # Renders a template and writes the result to the response.
        rv = self.jinja2.render_template(_template, **context)
        self.response.write(rv)

# Views Classes


class MainPage(JadeHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        self.render_response('index.jade', **template_values)


class AboutPage(JadeHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'About'
        self.render_response('about.jade', **template_values)


class TeamPage(JadeHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Team'
        self.render_response('team.jade', **template_values)


class ModulesPage(JadeHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Modules'
        mi = ModulesInfo()
        template_values['modules'] = sorted(
            mi.get_modules(),
            key=lambda module: module['name'].lower()
        )
        self.render_response('modules.jade', **template_values)


class ModulePage(JadeHandler):

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
        self.render_response('module.jade', **template_values)


class MailboxPage(JadeHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Mailbox'
        self.render_response('mailbox.jade', **template_values)


class MyBidsPage(JadeHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Mybids'
        self.render_response('mybids.jade', **template_values)


class MyPostsPage(JadeHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Myposts'
        self.render_response('myposts.jade', **template_values)


class MilestonesPage(JadeHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Milestones'
        self.render_response('milestones.jade', **template_values)
