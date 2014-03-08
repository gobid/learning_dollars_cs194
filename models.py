from google.appengine.api import users
from google.appengine.ext import ndb

# Database Models


class ModelUtils(object):

    def to_dict(self):
        result = super(ModelUtils, self).to_dict()
        result['key'] = self.key.id()
        return result


class Module(ModelUtils, ndb.Model):
    name = ndb.StringProperty()
    youtube = ndb.StringProperty(repeated=True)  # youtube playlist/video ids
    yt_type = ndb.StringProperty()  # whether it's a YT playlist/video
    courses = ndb.JsonProperty(repeated=True)  # OCW courses
    category = ndb.IntegerProperty()  # freelancer category id


class Account(ModelUtils, ndb.Model):
    guser = ndb.UserProperty()
    freelancer_at_key = ndb.StringProperty()  # freelancer access token key
    freelancer_at_secret = ndb.StringProperty()  # access token secret
    tutorials_completed = ndb.IntegerProperty(repeated=True)  # module ids
    jobs_completed = ndb.IntegerProperty(repeated=True)  # freelancer job ids

class Message(ModelUtils, ndb.Model):
    fromuser = ndb.UserProperty()
    touser = ndb.UserProperty()
    subject = ndb.StringProperty()
    message = ndb.StringProperty()
    datetime = ndb.DateTimeProperty()
