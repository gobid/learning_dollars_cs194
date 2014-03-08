import webapp2
import json
import HTMLParser

from config import config
from ocw import youtube
from ocw import ocwsearch
from models import Module, Account, Project
from functions import get_account

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



class CreateModule(webapp2.RequestHandler):

    def get(self, modulename):
        print "hit createmodule!!!"

        match = Module.query(Module.name == modulename).fetch()
        if len(match) > 0:
             response = {'response' : 'module exists'}
        else:
            y = youtube.Youtube()
            ocws = ocwsearch.OCWSearch()
            search_name = modulename + " tutorial"
            y_list, y_type = y.search(search_name)
            course_list = ocws.search(modulename)
            module = Module(
                name=modulename,
                youtube=y_list,
                yt_type=y_type, courses=course_list
            )
            module.put()
            response = {'response' : 'successfully stored'}
            print "success!"
        print response
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))



class SelectWinner(webapp2.RequestHandler):

    def get(self, project_id, winner_id):
        jac = get_personal_jac()
        if jac:
            response = jac.select_winner(project_id, winner_id)
        else:
            response = {'error': 'You are not logged in. '}
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
            response = {'error': 'User has no associated account. '
                        + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class RequestReleaseMilestone(webapp2.RequestHandler):

    def get(self, transaction_id):
        jac = get_personal_jac()
        if jac:
            response = jac.request_release_milestone(transaction_id)
        else:
            response = {'error': 'User has no associated account. '
                        + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class ReleaseMilestone(webapp2.RequestHandler):

    def get(self, transaction_id, fullname):
        jac = get_personal_jac()
        if jac:
            response = jac.release_milestone(transaction_id, fullname)
        else:
            response = {'error': 'User has no associated account. '
                        + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class BidOnProject(webapp2.RequestHandler):

    def get(self, project_id, amount, days, description):
        jac = get_personal_jac()
        if jac:
            response = jac.place_bid_on_project(
                project_id, amount, days, description)
        else:
            response = {'error': 'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


# This is retracting a bid from a project


class RetractBid(webapp2.RequestHandler):

    def get(self, project_id):
        jac = get_personal_jac()
        if jac:
            response = jac.retract_bid(project_id)
        else:
            response = {'error': 'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

# Accepting or Declining a Bid won:


class AcceptBid(webapp2.RequestHandler):

    def get(self, project_id, state):
        jac = get_personal_jac()
        if jac:
            response = jac.accept_bid(project_id, state)
        else:
            response = {'error': 'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class PostNewProject(webapp2.RequestHandler):

    def get(self, projectname, projectdesc, jobtypecsv, budgetoption,
            duration):
        jac = get_personal_jac()
        if jac:
            response = jac.post_new_project(
                projectname, projectdesc, jobtypecsv, budgetoption, duration)
        else:
            response = {'error': 'You are not logged in. '}
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
            response = {'error': 'User has no associated account. '
                        + 'Try logging out and logging in again.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

# Projects
class CreateProject(webapp2.RequestHandler):

    def get(self, name, price):
        project = Project(
            name=name,
            price=float(price)
        )
        project.put() # do error checking on puts later
        account = get_account()
        if account == None:
            response = 'No logged in account.'
        else:
            response = 'Logged in account found. Project Posted'
        account.projects_posted.append(project)
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

class AddBidderToProject(webapp2.RequestHandler):

    def get(self, project_id):
        project = Project.get_by_id(int(project_id))
        if project:
            account = int(get_account().key.id()) # must do redirect for session checks
            if account not in project.bidders:
                project.bidders.append(account)
                project.put()
                response = {'success': 'Bidder added.'}
            else:
                response = {'error': 'Bidder already added.'}
        else:
            response = {'error': 'No project of given id.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

class ChooseWinner(webapp2.RequestHandler):

    def get(self, project_id, bidder_id):
        project = Project.get_by_id(int(project_id))
        if project:
            bidder_id = int(bidder_id)
            if bidder_id in project.bidders:
                project.winner = bidder_id
                project.put()
                response = {'success': 'Winner chosen.'}
            else:
                response = {'error': 'Winner not in bidders list.'}
        else:
            response = {'error': 'No project of given id.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

#Upvote/downvote course

class Upvote(webapp2.RequestHandler):

    def get(self, moduleID, courseTitle):
        account = get_account()
        if account:
            courseVoteList = dict(account.courses_voted)
            print courseVoteList
            idTitlePair = moduleID+"+"+courseTitle
            if idTitlePair not in courseVoteList.keys() or courseVoteList[idTitlePair] == 'N':
                case = "votedNo"
                if idTitlePair not in courseVoteList.keys(): case = "notVoted"
                print case
                courseVoteList[idTitlePair]='Y'
                account.courses_voted = courseVoteList.items()
                print account
                account.put()
                moduleID = int(moduleID)
                match = Module.query(Module.category == moduleID).fetch()
                match = match[0]
                moduleCourses = match.courses
                for course in moduleCourses:
                    if course["Title"] == courseTitle:
                        if case == "notVoted": course["scoreRanking"] = course["scoreRanking"] + 1
                        else: course["scoreRanking"] = course["scoreRanking"] + 2
                match.courses = moduleCourses
                match.put()
                response = {'success': 'Vote submitted successfully.'}
            else:
                response = {'error': 'No.'}
        else:
            response = {'error': 'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

class Downvote(webapp2.RequestHandler):

    def get(self, moduleID, courseTitle):
        account = get_account()
        if account:
            courseVoteList = dict(account.courses_voted)
            idTitlePair = moduleID+"+"+courseTitle
            if idTitlePair not in courseVoteList.keys() or courseVoteList[idTitlePair] == 'Y':
                case = "votedYes"
                if idTitlePair not in courseVoteList.keys(): case = "notVoted"
                courseVoteList[idTitlePair]='N'
                account.courses_voted = courseVoteList.items()
                account.put()
                moduleID = int(moduleID)
                match = Module.query(Module.category == moduleID).fetch()
                match = match[0]
                moduleCourses = match.courses
                for course in moduleCourses:
                    if course["Title"] == courseTitle:
                        if case == "notVoted": course["scoreRanking"] = course["scoreRanking"] - 1
                        else: course["scoreRanking"] = course["scoreRanking"] - 2
                match.courses = moduleCourses
                match.put()
                response = {'success': 'Vote submitted successfully.'}
            else:
                response = {'error': 'No.'}
        else:
            response = {'error': 'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

