import webapp2
import json

from config import config
from models import Module, Account

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

    def get(self):
        modules = [m.to_dict() for m in Module.query().fetch()]
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(modules))


class PostsInfo(webapp2.RequestHandler):

    def get(self):
        jac = get_personal_jac()
        if jac:
            posts = jac.get_posts()
        else:
            posts = {'error': 'User has no associated account. '
                     + 'Try logging out and logging in again.'}
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


class InboxMessages(webapp2.RequestHandler):

    def get(self):
        jac = get_personal_jac()
        if jac:
            messages = jac.get_inbox_messages()
            count = messages['json-result']['count']
            if count > 0:
                items = messages['json-result']['items']
                for i in xrange(len(items)):
                    id = items[i]['projectid']
                    projectDetails = jac.get_project_details(id)
                    name = projectDetails['json-result']['name']
                    url = projectDetails['json-result']['url']
                    items[i]['projectname'] = name
                    items[i]['projecturl'] = url
        else:
            messages = {'error': 'User has no associated account. '
                        + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(messages))


class SentMessages(webapp2.RequestHandler):

    def get(self):
        jac = get_personal_jac()
        if jac:
            messages = jac.get_sent_messages()
            count = messages['json-result']['count']
            if count > 0:
                items = messages['json-result']['items']
                for i in xrange(len(items)):
                    id = items[i]['projectid']
                    projectDetails = jac.get_project_details(id)
                    name = projectDetails['json-result']['name']
                    url = projectDetails['json-result']['url']
                    items[i]['projectname'] = name
                    items[i]['projecturl'] = url
        else:
            messages = {'error': 'User has no associated account. '
                        + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(messages))


class GetPlacedBids(webapp2.RequestHandler):

    def get(self):
        jac = get_personal_jac()
        placed_bids = jac.get_placed_bids()
        self.response.write(json.dumps(placed_bids))


class GetProjectDetails(webapp2.RequestHandler):

    def get(self, project_id):
        response = self.get_info(project_id)
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

    def get_info(self, project_id):
        jac = get_personal_jac()
        if jac:
            projectDetails = jac.get_project_details(project_id)
        else:
            projectDetails = {'error': 'User has no associated account. '
                              + 'Try logging out and logging in again.'}
        return projectDetails


class GetUserDetails(webapp2.RequestHandler):

    def get(self, user_id):
        jac = get_personal_jac()
        if jac:
            response = jac.get_user_info(user_id)
        else:
            response = {'error': 'User has no associated account. '
                        + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class GetOutgoingMilestoneList(webapp2.RequestHandler):

    def get(self):
        jac = get_personal_jac()
        if jac:
            response = jac.get_outgoing_milestone_list()
        else:
            response = {'error': 'User has no associated account. '
                        + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class GetIncomingMilestoneList(webapp2.RequestHandler):

    def get(self):
        jac = get_personal_jac()
        if jac:
            response = jac.get_incoming_milestone_list()
        else:
            response = {'error': 'User has no associated account. '
                        + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class GetOutgoingMilestoneList(webapp2.RequestHandler):

    def get(self):
        jac = get_personal_jac()
        if jac:
            response = jac.get_project_info()
        else:
            response = {'error': 'User has no associated account. '
                        + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))
