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

	def get_posts(self):
		searchResults = self.freelancer.Employer.getPostedProjectList({
			'status': 1 # all
		})
		return searchResults

	def create_milestone_payment(self, project_id, amount, touserid, reasontext, reasontype):
		response = self.freelancer.Payment.createMilestonePayment({
			'projectid': project_id,
			'amount': amount,
			'touserid': touserid,
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

	def sent_message(self, project_id, message_text, user_id):
		message = self.freelancer.Account.Message.sentMessage({
			'projectid': project_id,
			'messagetext': message_text,
			'userid': user_id
		})
		return message
