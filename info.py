import webapp2
import json

from config import config
from models import Module, Account, Project, Message
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

    def convert_to_project_JSON(self, project):
        account_id = get_account().key.id()
        frmtd_end_date = project.end_date
        owner = False
        if frmtd_end_date is not None:
            frmtd_end_date = frmtd_end_date.strftime('%b %d, %Y')
        alreadyBidOn = False
        if account_id in project.bidders:
            alreadyBidOn = True
        if account_id == project.owner:
            owner = True
        newProjectJSON = {
            'projectid': project.key.id(),
            'projectname': project.name,
            'bidders': project.bidders,
            'winner': project.winner,
            'price': project.price,
            'bidcount': len(project.bidders),
            'enddate': frmtd_end_date,
            'complete': project.complete,
            'alreadyBidOn': alreadyBidOn,
            'owner': owner
        }
        print newProjectJSON
        return newProjectJSON

    def get_info(self, module_id):
        module_id = int(module_id)
        module = Module.get_by_id(module_id)
        votedCourses = {}
        account = get_account()
        if account:
            votedCourses = account.courses_voted
        votedCourses = dict(votedCourses)
        newJobsJSON = []
        jobs = Project.query(Project.job_type == module.name).fetch()
        for job in jobs:
            newProject = self.convert_to_project_JSON(job)
            newJobsJSON.append(newProject)
        info = {
            'name': module.name,
            'youtube': module.youtube,
            'yt_type': module.yt_type,
            'courses': module.courses,
            'category': module.category,
            'jobs': newJobsJSON,
            'votedCourses': votedCourses
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


class ProjectBidsInfo(webapp2.RequestHandler):

    def get_bids(self, project_id):
        jac = job_api_calls.JobApiCalls()
        bids = jac.get_project_bids(project_id)
        return bids

    def get(self, project_id):
        project_id = int(project_id)
        project = Project.get_by_id(project_id)

        account = get_account()
        projects_posted = account.projects_posted

        is_owner = False
        if project_id in projects_posted:
            is_owner = True

        if project.winner == None:
            bidders = project.bidders
            bidders_expanded = []
            for bidder_id in bidders:
                bidder = Account.get_by_id(bidder_id).guser.email()
                bidders_expanded.append({
                    'id': bidder_id,
                    'email': bidder,
                    'is_owner': is_owner
                })
            response = bidders_expanded
        else:
            response = {'winner': project.winner}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class MessagesInfo(webapp2.RequestHandler):

    def get(self):
        userid = get_account().key.id()
        # inbox messages
        inboxMessages = Message.query(Message.touserid == userid).fetch()
        inboxMessages = sorted(
            inboxMessages,
            key=lambda inboxMessage: inboxMessage.datetime
        )
        inbox_messages_out = []
        for im in inboxMessages:
            fromuseremail = Account.get_by_id(im.fromuserid).guser.email()
            im_out = {
                'fromuseremail': fromuseremail,
                'subject': im.subject,
                'message': im.message,
                'datetime': im.datetime.strftime("%Y-%m-%d %H:%M:%S")
            }
            inbox_messages_out.append(im_out)
        # sent messages
        sentMessages = Message.query(Message.fromuserid == userid).fetch()
        sentMessages = sorted(
            sentMessages,
            key=lambda sentMessage: sentMessage.datetime
        )
        sent_messages_out = []
        for sm in sentMessages:
            touseremail = Account.get_by_id(sm.touserid).guser.email()
            sm_out = {
                'touseremail': touseremail,
                'subject': sm.subject,
                'message': sm.message,
                'datetime': sm.datetime.strftime("%Y-%m-%d %H:%M:%S")
            }
            sent_messages_out.append(sm_out)
        messages = {
            'inbox_messages': inbox_messages_out,
            'sent_messages': sent_messages_out
        }
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
            project_open = "open"
            frmtd_end_date = project.end_date
            winner_email = None
            if frmtd_end_date is not None:
                frmtd_end_date = frmtd_end_date.strftime('%b %d, %Y')
            if project.winner is not None:
                project_open = "Closed (Winner selected)"
                winner_account = Account.get_by_id(int(project.winner))
                if winner_account:
                    winner_email = winner_account.guser.email()
            projectJSON = {
                'projectid': project_id,
                'projectname': project.name,
                'bidders': project.bidders,
                'winner': project.winner,
                'winner_email': winner_email,
                'price': project.price,
                'bidcount': len(project.bidders),
                'enddate': frmtd_end_date,
                'additionalstatus': project_open,
                'complete': project.complete
            }
            placed_bids.append(projectJSON)
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(placed_bids))


class GetProjectDetails(webapp2.RequestHandler):

    def get(self, project_id):
        project_id = int(project_id)
        project = Project.get_by_id(project_id)
        project_open = "open"
        frmtd_end_date = project.end_date
        if frmtd_end_date is not None:
            frmtd_end_date = frmtd_end_date.strftime('%b %d, %Y')
        if project.winner is not None:
            project_open = "Closed (Winner selected)"
        newProjectJSON = {
            'projectid': project_id,
            'projectname': project.name,
            'bidders': project.bidders,
            'winner': project.winner,
            'price': project.price,
            'bidcount': len(project.bidders),
            'enddate': frmtd_end_date,
            'additionalstatus': project_open,
            'complete': project.complete,
            'description': project.description
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
