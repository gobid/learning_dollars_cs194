import webapp2
import json
import HTMLParser
import datetime
import urlparse

from google.appengine.api import users
from config import config
from ocw import youtube
from ocw import ocwsearch
from models import Module, Account, Project, Message
from functions import get_account
import datetime

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
                    match.name = name
                    match.youtube = y_list
                    match.yt_type = y_type
                    match.courses = course_list
                    match.put()

        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(categories))


class CreateModule(webapp2.RequestHandler):

    def get(self, modulename):
        match = Module.query(Module.name == modulename).fetch()
        if len(match) > 0:
            response = {'response': 'module exists'}
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
            response = {'response': 'successfully stored'}
            module.category = module.key.id()
            module.put()
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
        user_id = get_account().key.id()
        end_date = datetime.datetime.now()
        end_date = end_date + datetime.timedelta(days=int(duration))
        project = Project(
            name=projectname,
            price=budgetoption,
            description=projectdesc,
            job_type=jobtypecsv,
            end_date=end_date,
            owner=user_id
        )
        project.put()  # do error checking on puts later
        account = get_account()
        account.projects_posted.append(project.key.id())
        account.put()
        if account == None:
            response = 'No logged in account.'
        else:
            response = 'Logged in account found. Project Posted'
        account.projects_posted.append(project)
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

# Messages


class SendMessage(webapp2.RequestHandler):

    def get(self, subject_text, message_text, to_email):
        user = users.User(to_email)
        accounts = Account.query(Account.guser == user).fetch()
        if len(accounts) > 0:
            account_to = accounts[0]
            touserid = account_to.key.id()
            fromuserid = get_account().key.id()
            message = Message(
                fromuserid=fromuserid,
                touserid=touserid,
                subject=subject_text,
                message=message_text,
                datetime=datetime.datetime.now()
            )
            message.put()
            response = {'response': 'success!'}
        else:
            response = {'error': 'the email does not exist'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))

# Projects


# class CreateProject(webapp2.RequestHandler):

#     def get(self, name, price, description, date, month, year, job_type):
#         end_date = datetime.datetime(int(year), int(month), int(date))
#         project = Project(
#             name=name,
#             price=price,
#             description=description,
#             end_date=end_date,
#             job_type=job_type
#         )
# project.put()  # do error checking on puts later
#         account = get_account()
#         account.projects_posted.append(project.key.id())
#         account.put()
#         if account == None:
#             response = 'No logged in account.'
#         else:
#             response = 'Logged in account found. Project Posted'
#         account.projects_posted.append(project)
#         self.response.headers['Content-Type'] = 'application/json'
#         self.response.write(json.dumps(response))

class BidOnProject(webapp2.RequestHandler):

    def get(self, project_id):
        project_id = int(project_id)
        project = Project.get_by_id(project_id)
        if project:
            account = get_account()
            # must do redirect for session checks
            account_id = int(account.key.id())
            if account_id not in project.bidders:
                project.bidders.append(account_id)
                project.put()
                account.projects_bidded_on.append(project_id)
                account.put()
                response = 'Success'
            else:
                response = 'Bidder already added.'
        else:
            response = {'error': 'No project of given id.'}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class ChooseWinner(webapp2.RequestHandler):

    def get(self, project_id, bidder_id):
        project_id = int(project_id)
        project = Project.get_by_id(project_id)
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

# Upvote/downvote course


class Upvote(webapp2.RequestHandler):

    def get(self, moduleID, courseID):
        courseID = int(courseID)
        account = get_account()
        if account:
            courseVoteList = dict(account.courses_voted)
            idPair = moduleID + "+" + str(courseID)
            if idPair not in courseVoteList.keys() or courseVoteList[idPair] == 'N':
                case = "votedNo"
                if idPair not in courseVoteList.keys():
                    case = "notVoted"
                courseVoteList[idPair] = 'Y'
                account.courses_voted = courseVoteList.items()
                account.put()
                moduleID = int(moduleID)
                match = Module.query(Module.category == moduleID).fetch()
                match = match[0]
                moduleCourses = match.courses
                newScore = 0
                for course in moduleCourses:
                    if course:
                        if course['ID'] == courseID:
                            if case == "notVoted":
                                course["scoreRanking"] = course[
                                    "scoreRanking"] + 1
                            else:
                                course["scoreRanking"] = course[
                                    "scoreRanking"] + 2
                            newScore = course["scoreRanking"]
                match.courses = moduleCourses
                match.courses = sorted(
                    match.courses, key=lambda k: k['scoreRanking'], reverse=True)
                match.put()
                response = {
                    'success': 'Vote submitted successfully.', 'newScore': newScore}
            else:
                response = {'error': 'No.'}
        else:
            response = {'error': 'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class Downvote(webapp2.RequestHandler):

    def get(self, moduleID, courseID):
        courseID = int(courseID)
        account = get_account()
        if account:
            courseVoteList = dict(account.courses_voted)
            idPair = moduleID + "+" + str(courseID)
            if idPair not in courseVoteList.keys() or courseVoteList[idPair] == 'Y':
                case = "votedYes"
                if idPair not in courseVoteList.keys():
                    case = "notVoted"
                courseVoteList[idPair] = 'N'
                account.courses_voted = courseVoteList.items()
                account.put()
                moduleID = int(moduleID)
                match = Module.query(Module.category == moduleID).fetch()
                match = match[0]
                moduleCourses = match.courses
                newScore = 0
                for course in moduleCourses:
                    if course:
                        if course['ID'] == courseID:
                            if case == "notVoted":
                                course["scoreRanking"] = course[
                                    "scoreRanking"] - 1
                            else:
                                course["scoreRanking"] = course[
                                    "scoreRanking"] - 2
                            newScore = course["scoreRanking"]
                match.courses = moduleCourses
                match.courses = sorted(
                    match.courses, key=lambda k: k['scoreRanking'], reverse=True)
                match.put()
                response = {
                    'success': 'Vote submitted successfully.', 'newScore': newScore}
            else:
                response = {'error': 'No.'}
        else:
            response = {'error': 'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class AddCourse(webapp2.RequestHandler):

    def get(self, moduleID, title, institution, teachDate, instructors, description):
        account = get_account()
        if account:
            newCourse = dict()
            newCourse["CourseURL"] = urlparse.unquote(
                self.request.get('courseURL'))
            newCourse["Title"] = title
            newCourse["Institution"] = institution
            newCourse["TeachingDate"] = teachDate
            newCourse["Instructors"] = instructors
            newCourse["Description"] = description
            newCourse["DownloadPageLink"] = urlparse.unquote(
                self.request.get('materials'))
            newCourse["scoreRanking"] = 1
            moduleID = int(moduleID)
            match = Module.query(Module.category == moduleID).fetch()
            match = match[0]
            moduleCourses = match.courses
            newCourse['ID'] = len(moduleCourses)
            moduleCourses.append(newCourse)
            match.courses = moduleCourses
            match.courses = sorted(
                match.courses, key=lambda k: k['scoreRanking'], reverse=True)
            match.put()
            response = {'success': 'Course submitted successfully.'}
        else:
            response = {'error': 'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))


class GetUserVoteList(webapp2.RequestHandler):

    def get(self):
        account = get_account()
        if account:
            courseVoteList = dict(account.courses_voted)
            response = {
                'success': 'Votes retrieved successfully.', 'voteList': courseVoteList}
        else:
            response = {'error': 'You are not logged in. '}
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(response))
