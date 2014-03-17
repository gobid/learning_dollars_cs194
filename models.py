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
    category = ndb.IntegerProperty()  # category ID; used for voting


class Account(ModelUtils, ndb.Model):
    guser = ndb.UserProperty()
    modules_completed = ndb.IntegerProperty(repeated=True)  # module ids
    projects_completed = ndb.IntegerProperty(repeated=True)
    projects_posted = ndb.IntegerProperty(repeated=True)
    projects_bidded_on = ndb.IntegerProperty(repeated=True)
    # list of courses they've voted on
    courses_voted = ndb.JsonProperty(repeated=True)


class Project(ModelUtils, ndb.Model):
    bidders = ndb.IntegerProperty(repeated=True)
    winner = ndb.IntegerProperty()
    price = ndb.StringProperty()  # included on creation
    name = ndb.StringProperty()  # included on creation
    description = ndb.StringProperty()  # included on creation
    job_type = ndb.StringProperty()  # included on creation (module id)
    end_date = ndb.DateProperty()  # included on creation
    complete = ndb.StringProperty()
    owner = ndb.IntegerProperty()


class Message(ModelUtils, ndb.Model):
    fromuserid = ndb.IntegerProperty()
    touserid = ndb.IntegerProperty()
    subject = ndb.StringProperty()
    message = ndb.StringProperty()
    datetime = ndb.DateTimeProperty()
