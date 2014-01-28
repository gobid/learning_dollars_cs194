from oauth import get_authorize_url, get_access_token
from api import Freelancer
from client import FreelancerClient
from response import FreelancerResponse

import json

   

SANDBOX = 'api.sandbox.freelancer.com'
SANDBOX_APP = 'http://www.sandbox.freelancer.com/users/api-token/auth.php'
consumer = ('63fab644941c11d9aeb036130d8520e0e7ab1138', 'c5479e0bf3c20893fb2f7e95259e3a4818872b4e')
token = ('1fd049f2f51a5dd38e54df6889815a5ed5ad9de2', 'aee23a6d134dee727582b751aed8c82c0a25a07d')


class JobApiCalls(object):

	def __init__(self):
		self.client = FreelancerClient(consumer, token)
		self.freelancer = Freelancer(self.client, SANDBOX)


	def search(self, keyword, count):

		searchResults = self.freelancer.Project.searchProjects({'count':count, 'searchkeyword':keyword, 'isfeatured':True, 'isnonpublic':False})
		return searchResults



	def get_categories(self):

		jobList = self.freelancer.Job.getJobList()
		job_list_dict = jobList['json-result']['items']

		job_categories = []

		for s in job_list_dict:
			job_categories.append(s['name'])

		return job_categories






