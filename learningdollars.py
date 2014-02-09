# MODELS

import webapp2

from pages import MainPage, AboutPage, TeamPage, ModulesPage, ModulePage, \
    DashboardPage
from actions import UpdateModules, CreateMilestonePayment, SelectWinner, \
    SendMessage, BidOnProject, PostNewProject, RetractBid
from info import AccountInfo, ModuleInfo, ModulesInfo, ProjectBidsInfo, PostsInfo, \
    InboxMessages, SentMessages

application = webapp2.WSGIApplication([
    # Views
    webapp2.Route(
        '/', 
        handler=MainPage, 
        name='main'
    ),
    webapp2.Route(
        '/about', 
        handler=AboutPage, 
        name='about'
    ),
    webapp2.Route(
        '/team', 
        handler=TeamPage, 
        name='team'
    ),
    webapp2.Route(
        '/modules', 
        handler=ModulesPage, 
        name='modules'
    ),
    webapp2.Route(
        '/<module_id:\d+>', 
        handler=ModulePage, 
        name='module'
    ),
    webapp2.Route(
        '/dashboard', 
        handler=DashboardPage, 
        name='dashboard'
    ),

    # Info
    webapp2.Route(
        '/accountinfo/<account_id:\d+>', 
        handler=AccountInfo, 
        name='account'
    ),
    webapp2.Route(
        '/moduleinfo/<module_id:\d+>', 
        handler=ModuleInfo, 
        name='module'
    ),
    webapp2.Route(
        '/modulesinfo', 
        handler=ModulesInfo, 
        name='modules'
    ),
    webapp2.Route(
        '/getprojectbids/<project_id:\d+>',
        handler=ProjectBidsInfo,
        name='projectbids'
    ),
    webapp2.Route(
        '/postsinfo',
        handler=PostsInfo,
        name='getposts'
    ),
    webapp2.Route(
        '/inboxMessages',
        handler=InboxMessages,
        name='getInboxMessages'
    ),
    webapp2.Route(
        '/sentMessages',
        handler=SentMessages,
        name='getSentMessages'
    ),

    # Actions
    webapp2.Route(
        '/updatemodules', 
        handler=UpdateModules, 
        name='updatemodules'
    ),
    webapp2.Route(
        '/selectwinner/<project_id:\d+>/<winner_id:\d+>', 
        handler=SelectWinner, 
        name='selectwinner'
    ),
    webapp2.Route(
        '/createmilestonepayment/<project_id:\d+>/<amount:\d+>/' + \
        '<currency_id:\d+>/<touserid:\w+>/<reasontext:\w+>/<reasontype:\w+>', 
        handler=CreateMilestonePayment, 
        name='createmilestonepayment'
    ),

    webapp2.Route(
        '/bidonproject/<project_id:\d+>/<amount:\d+>/<days:\d+>/<description:[^/]+>', 
        handler=BidOnProject,
        name='bidonproject'
    ),

     webapp2.Route(
        '/retractbid/<project_id:\d+>', 
        handler=RetractBid,
        name='retractbid'
    ),

    webapp2.Route(
        '/postnewproject/<projectname:[^/]+>/<projectdesc:[^/]+>/<jobtypecsv:[^/]+>/<budgetoption:\d+>/<duration:\d+>', 
        handler=PostNewProject,
        name='postnewproject'
    ),

    webapp2.Route(
        '/sendMessage/<project_id:\d+>/<message_text:[^/]+>/<user_name:\w+>',
        handler=SendMessage,
        name='sendMessage'
    ),
    
], debug=True)
