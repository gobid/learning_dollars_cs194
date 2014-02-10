from oauth import get_authorize_url, get_access_token
from api import Freelancer
from client import FreelancerClient
from response import FreelancerResponse

import json

from config import config

consumer = (config.CONSUMER_KEY, config.CONSUMER_SECRET)
token = (config.TOKEN_KEY, config.TOKEN_SECRET)

class JobApiCalls(object):

	def __init__(self, token=token): 
		# use default token unless otherwise specified
		self.client = FreelancerClient(consumer, token)
		self.freelancer = Freelancer(self.client, config.SANDBOX)

	def search(self, keyword, count):

		searchResults = self.freelancer.Project.searchProjects({
			'count':count, 
			'searchkeyword':keyword, 
			'isfeatured':True, 
			'isnonpublic':False
		})
		return searchResults

	def get_categories(self):

		jobList = self.freelancer.Job.getJobList()
		job_list_dict = jobList['json-result']['items']

		job_categories = []

		for s in job_list_dict:
			job_categories.append(s)

		return job_categories

	def get_jobs(self, keyword):
		searchResults = self.freelancer.Project.searchProjects({
			'count':10,
			'searchkeyword':keyword
		})
		return searchResults

	def get_project_bids(self, project_id):
		searchResults = self.freelancer.Project.getBidsDetails({
			'projectid': project_id		
		})
		return searchResults

	def select_winner(self, project_id, winner_id):
		response = self.freelancer.Employer.chooseWinnerForProject({
			'projectid': project_id,
			'useridcsv': "'" + winner_id + "',"
		})
		return response

	#use project 1037
	def place_bid_on_project(self, project_id, amount, days, description):
		status = self.freelancer.Account.Freelancer.placeBidOnProject({
			'amount':amount,
			'days':days,
			'description': description,
			'projectid':project_id
		})
		print status
		return status

	def retract_bid(self, project_id):
		status = self.freelancer.Account.Freelancer.retractBidFromProject({
			'projectid':project_id
		})
		print status
		return status

	def get_posts(self):
		searchResults = self.freelancer.Employer.getPostedProjectList({
			'status': 1 # all
		})
		return searchResults

	def post_new_project(self, projectname, projectdesc, jobtypecsv, budgetoption, duration):
		print 'hitttttt!!!'
		response = self.freelancer.Employer.postNewProject({
			'projectname': projectname,
			'projectdesc': projectdesc,
			'jobtypecsv': jobtypecsv,
			'budgetoption': budgetoption,
			'duration': duration
		})
		print response
		return response

	def create_milestone_payment(self, project_id, amount, currency, 
		touserid, reasontext, reasontype):
		print 'account balance'
		print self.freelancer.Payment.getAccountBalanceStatus()
		print 'amount: ' + amount
		response = self.freelancer.Payment.createMilestonePayment({
			'projectid': project_id,
			'amount': amount,
			'currency': currency_id,
			'tousername': touserid,
			'reasontext': reasontext,
			'reasontype': reasontype		
		})
		return response


	def get_inbox_messages(self):
		inboxMessages = self.freelancer.Account.Message.getInboxMessages()
		return inboxMessages

	def get_sent_messages(self):
		sentMessages = self.freelancer.Account.Message.getSentMessages()
		return sentMessages

	def send_message(self, project_id, message_text, user_name):
		message = self.freelancer.Account.Message.sendMessage({
			'projectid': project_id,
			'messagetext': message_text,
			'username': user_name
		})
		return message

	def get_placed_bids(self):
		placed_bids = self.freelancer.Account.Freelancer.getProjectListForPlacedBids({
			'status': 1
		})
		print placed_bids
		return placed_bids

	def get_project_details(self, project_id):
		project = self.freelancer.Project.getProjectDetails({
			'projectid': project_id
		})
		return project

