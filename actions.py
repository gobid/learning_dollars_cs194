import webapp2

from config import config
from ocw import youtube
from ocw import ocwsearch
from freelancer import job_api_calls, oauth
from models import Module, Account

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
            name = c['name']
            search_name = name + " tutorial"
            y_list, y_type = y.search(search_name)
            course_list = ocws.search(name)

            # store/update as needed
            match = Module.query(Module.category == c_id).fetch()
            module = Module(
                name=name, 
                youtube=y_list, 
                yt_type=y_type, courses=course_list, category=c_id)
            
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

#class CreateMilestonePayment(webapp2.RequestHandler):

#    def 

