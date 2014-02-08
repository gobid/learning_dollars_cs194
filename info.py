import webapp2
import json

from config import config
from models import Module, Account
from freelancer import job_api_calls, oauth

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
        jac = job_api_calls.JobApiCalls()
        jobs = jac.get_jobs(module.name)['json-result']['items']
        info = {
            'name': module.name,
            'youtube': module.youtube,
            'yt_type': module.yt_type,
            'courses': module.courses,
            'category': module.category,
            'jobs': jobs
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

class PostsInfo(webapp2.RequestHandler):
    def get(self):
        jac = job_api_calls.JobApiCalls()
        posts = jac.get_posts()
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(posts))

class ProjectBidsInfo(webapp2.RequestHandler):

    def get_bids(self, project_id):
        jac = job_api_calls.JobApiCalls()
        bids = jac.get_project_bids(project_id)
        return bids

    def get(self, project_id):
        jac = job_api_calls.JobApiCalls()
        bids = jac.get_project_bids(project_id)
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(bids))
