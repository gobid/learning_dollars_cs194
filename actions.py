import webapp2
import json
import HTMLParser

from config import config
from ocw import youtube
from ocw import ocwsearch
from freelancer import job_api_calls, oauth
from models import Module, Account
from functions import get_personal_jac

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
            name = HTMLParser.HTMLParser().unescape(c['name'])
            search_name = name + " tutorial"
            y_list, y_type = y.search(search_name)
            course_list = ocws.search(name)

            # store/update as needed
            match = Module.query(Module.category == c_id).fetch()
            module = Module(
                name=name, 
                youtube=y_list, 
                yt_type=y_type, courses=course_list, category=c_id
            )

            if len(match) == 0:        
                module.put()
            else:
                match = match[0]
                if (str(match.name) != name or 
                    str(match.yt_type) != y_type or 
                    match.youtube != y_list or 
                    match.courses != course_list):
                        print 'module different'
                        match.name = name
                        match.youtube = y_list
                        match.yt_type = y_type
                        match.courses = course_list
                        match.put()
        
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(categories)) 

class SelectWinner(webapp2.RequestHandler):

    def get(self, project_id, winner_id):
        jac = get_personal_jac()
        if jac:
            response = jac.select_winner(project_id, winner_id)
        else:
            response = {'error':'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response)) 

class CreateMilestonePayment(webapp2.RequestHandler):

    def get(self, project_id, amount, currency_id, tousername, reasontext, 
        reasontype):
        jac = get_personal_jac()
        if jac:
            response = jac.create_milestone_payment(
                project_id, 
                amount, 
                currency_id,
                tousername, 
                reasontext, 
                reasontype
            )
        else:
            response = {'error':'User has no associated account. ' \
            + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

class RequestReleaseMilestone(webapp2.RequestHandler):

    def get(self, transaction_id):
        jac = get_personal_jac()
        if jac:
            response = jac.request_release_milestone(transaction_id)
        else:
            response = {'error':'User has no associated account. ' \
            + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

class ReleaseMilestone(webapp2.RequestHandler):

    def get(self, transaction_id, fullname):
        jac = get_personal_jac()
        if jac:
            response = jac.release_milestone(transaction_id, fullname)
        else:
            response = {'error':'User has no associated account. ' \
            + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))      


class BidOnProject(webapp2.RequestHandler):

    def get(self, project_id, amount, days, description):
        jac = get_personal_jac()
        if jac: 
            response = jac.place_bid_on_project(project_id, amount, days, description)
        else:
            response = {'error':'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))   

# This is retracting a bid from a project
class RetractBid(webapp2.RequestHandler):

    def get(self, project_id):
        jac = get_personal_jac()
        if jac: 
            response = jac.retract_bid(project_id)
        else:
            response = {'error':'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

# Accepting or Declining a Bid won: 
class AcceptBid(webapp2.RequestHandler):

    def get(self, project_id, state):
        jac = get_personal_jac()
        if jac: 
            response = jac.accept_bid(project_id, state)
        else:
            response = {'error':'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

class PostNewProject(webapp2.RequestHandler):

    def get(self, projectname, projectdesc, jobtypecsv, budgetoption, 
            duration):
        jac = get_personal_jac()
        if jac: 
            response = jac.post_new_project(projectname, projectdesc, jobtypecsv, budgetoption, duration)
        else: 
            response = {'error':'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

class SendMessage(webapp2.RequestHandler):

    def get(self, project_id, message_text, user_name):
        jac = get_personal_jac()
        if jac:
            response = jac.send_message(
                project_id,
                message_text,
                user_name
            )
        else:
            response = {'error':'User has no associated account. ' \
            + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

