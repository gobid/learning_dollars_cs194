from oauth import get_authorize_url, get_access_token
from api import Freelancer
from client import FreelancerClient
from config import config

consumer = (config.CONSUMER_KEY, config.CONSUMER_SECRET)
token = (config.TOKEN_KEY, config.TOKEN_SECRET)
client = FreelancerClient(consumer, token)
count = raw_input("Number of projects: ")
freelancer = Freelancer(client, config.SANDBOX)
projects = freelancer.Project.searchProjects({
	'count':count, 
	'searchjobtypecsv':'PHP', 
	'isfeatured':'True'
})
print projects
