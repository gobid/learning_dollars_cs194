import webapp2
import json

from config import config
from models import Module, Account, Project
from functions import get_account

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
        jobs = []
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
        modules = sorted(
            modules,
            key=lambda module: module['name'].lower()
        )
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(modules))


class PostsInfo(webapp2.RequestHandler):

    def get(self):
        projects = get_account().projects_posted
        posted_projects = []
        for project_id in projects:
            project = Project.get_by_id(project_id)
            project_open = "open"
            frmtd_end_date = project.end_date
            # print project.end_date.strftime('We are the %d, %b %Y')
            if frmtd_end_date is not None:
                frmtd_end_date = frmtd_end_date.strftime('%b %d, %Y')
            if project.winner is not None:
                project_open = "closed(Winner selected)"
            newProjectJSON = {
                'projectid': project_id,
                'projectname': project.name,
                'bidders': project.bidders,
                'winner': project.winner,
                'price': project.price,
                'bidcount': len(project.bidders),
                'enddate': frmtd_end_date,
                'additionalstatus': project_open,
                'complete': project.complete
            }
            posted_projects.append(newProjectJSON)

        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(posted_projects))

        # jac = get_personal_jac()
        # if jac:
        #     posts = jac.get_posts()
        # else:
        #     posts = {'error': 'User has no associated account. '
        #              + 'Try logging out and logging in again.'}


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
        userid = get_account.key.id()
        messages = Message.query(touserid == userid).fetch()
        messages = sorted(
            messages,
            key=lambda message: message['datetime']
        )
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(messages))


class SentMessages(webapp2.RequestHandler):

    def get(self):
        userid = get_account.key.id()
        messages = Message.query(fromuserid == userid).fetch()
        messages = sorted(
            messages,
            key=lambda message: message['datetime']
        )
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(messages))


class GetPlacedBids(webapp2.RequestHandler):

    def get(self):
        account = get_account()
        placed_bids_ids = account.projects_bidded_on
        placed_bids = []
        for i in placed_bids_ids:
            project_id = int(i)
            project = Project.get_by_id(project_id)
            placed_bids.append(project.to_dict())
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(placed_bids))


class GetProjectDetails(webapp2.RequestHandler):

    def get(self, project_id):
        project = Project.get_by_id(project_id)
        project_open = "open"
        frmtd_end_date = project.end_date
        # print project.end_date.strftime('We are the %d, %b %Y')
        if frmtd_end_date is not None:
            frmtd_end_date = frmtd_end_date.strftime('%b %d, %Y')
        if project.winner is not None:
            project_open = "closed(Winner selected)"
        newProjectJSON = {
            'projectid': project_id,
            'projectname': project.name,
            'bidders': project.bidders,
            'winner': project.winner,
            'price': project.price,
            'bidcount': len(project.bidders),
            'enddate': frmtd_end_date,
            'additionalstatus': project_open,
            'complete': project.complete
        }
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(newProjectJSON))

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
