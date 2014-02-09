# MODELS

import webapp2

from pages import MainPage, AboutPage, TeamPage, ModulesPage, ModulePage, \
    DashboardPage
from info import AccountInfo, ModuleInfo, ModulesInfo, ProjectBidsInfo, PostsInfo
from actions import UpdateModules, CreateMilestonePayment

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

    # Actions
    webapp2.Route(
        '/updatemodules', 
        handler=UpdateModules, 
        name='updatemodules'
    ),
    webapp2.Route(
        '/createmilestonepayment/<project_id:\d+>/<amount:\w+>/' + \
        '<touserid:\w+>/<reasontext:\w+>/<reasontype:\w+>', 
        handler=CreateMilestonePayment, 
        name='createmilestonepayment'
    ),
], debug=True)
