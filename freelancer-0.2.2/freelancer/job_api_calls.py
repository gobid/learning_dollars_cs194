from oauth import get_authorize_url, get_access_token
from api import Freelancer
from client import FreelancerClient
from response import FreelancerResponse

import json

from config import config

consumer = (config.CONSUMER_KEY, config.CONSUMER_SECRET)
token = (config.TOKEN_KEY, config.TOKEN_SECRET)

class JobApiCalls(object):

	def __init__(self):
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
