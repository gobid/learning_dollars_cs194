import config

class Freelancer:
    
    def __init__(self):
		self.api_transport = 'http'
		self.api_host_production = 'api.freelancer.com'
		self.api_host_sandbox = 'api.sandbox.freelancer.com'
		self.auth_token_timeout = 9999999999

		if is_production:
			self.api_base = API_TRANSPORT + '://' +  self.api_host_production
		else:
			self.api_base = API_TRANSPORT + '://' + self.api_host_sandbox

		self.request_token_url = self.api_base + '/RequestRequestToken/requestRequestToken.json'
		self.verifier_url = self.api_base + '/RequestAccessToken/getRequestTokenVerifier.json'
		self.access_token_url = self.api_base + '/RequestAccessToken/requestAccessToken.json'		

	def authorize():

