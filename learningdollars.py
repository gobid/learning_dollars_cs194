# MODELS

import webapp2

from pages import MainPage, AboutPage, TeamPage, ModulesPage, ModulePage, \
    MailboxPage, MyBidsPage, MyPostsPage, MilestonesPage, ProjectPage

from actions import UpdateModules, CreateMilestonePayment, SelectWinner, \
    SendMessage, BidOnProject, PostNewProject, RetractBid, AcceptBid

from info import AccountInfo, ModuleInfo, ModulesInfo, ProjectBidsInfo, \
    PostsInfo, InboxMessages, SentMessages, GetPlacedBids, \
    GetProjectDetails, GetIncomingMilestoneList, GetOutgoingMilestoneList, \
    GetUserDetails

from actions import UpdateModules, CreateMilestonePayment, SendMessage, \
    BidOnProject, PostNewProject, RetractBid, RequestReleaseMilestone, \
    ReleaseMilestone

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
        '/mailbox',
        handler=MailboxPage,
        name='mailbox'
    ),
    webapp2.Route(
        '/mybids',
        handler=MyBidsPage,
        name='mybidspage'
    ),
    webapp2.Route(
        '/myposts',
        handler=MyPostsPage,
        name='mypostspage'
    ),
    webapp2.Route(
        '/milestones',
        handler=MilestonesPage,
        name='milestonespage'
    ),
    webapp2.Route(
        '/project/<project_id:\d+>',
        handler=ProjectPage,
        name='projectpage'
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
        '/getoutgoingmilestonelist',
        handler=GetOutgoingMilestoneList,
        name='getoutgoingmilestones'
    ),
    webapp2.Route(
        '/getincomingmilestonelist',
        handler=GetIncomingMilestoneList,
        name='getincomingmilestones'
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
    webapp2.Route(
        '/projectDetails/<project_id:\d+>',
        handler=GetProjectDetails,
        name='getProjectDetails'
    ),
    webapp2.Route(
        '/userDetails/<user_id:\d+>',
        handler=GetUserDetails,
        name='getUserDetails'
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
        '/createmilestonepayment/<project_id:\d+>/<amount:\d+>/' +
        '<currency_id:\d+>/<tousername:\w+>/<reasontext:\w+>/' +
        '<reasontype:\w+>',
        handler=CreateMilestonePayment,
        name='createmilestonepayment'
    ),
    webapp2.Route(
        '/requestreleasemilestone/<transaction_id:\d+>',
        handler=RequestReleaseMilestone,
        name='requestreleasemilestone'
    ),
    webapp2.Route(
        '/releasemilestone/<transaction_id:\d+>/<fullname:[^/]+>',
        handler=ReleaseMilestone,
        name='releasemilestone'
    ),
    webapp2.Route(
        '/acceptbid/<project_id:\d+>/<state:\d+>',
        handler=AcceptBid,
        name='acceptbid'
    ),
    webapp2.Route(
        '/bidonproject/<project_id:\d+>/<amount:[^/]+>/<days:\d+>/' +
        '<description:[^/]+>',
        handler=BidOnProject,
        name='bidonproject'
    ),
    webapp2.Route(
        '/retractbid/<project_id:\d+>',
        handler=RetractBid,
        name='retractbid'
    ),
    webapp2.Route(
        '/postnewproject/<projectname:[^/]+>/<projectdesc:[^/]+>/' +
        '<jobtypecsv:[^/]+>/<budgetoption:\d+>/<duration:\d+>',
        handler=PostNewProject,
        name='postnewproject'
    ),
    webapp2.Route(
        '/sendMessage/<project_id:\d+>/<message_text:[^/]+>/<user_name:\w+>',
        handler=SendMessage,
        name='sendMessage'
    ),
    webapp2.Route(
        '/getplacedbids',
        handler=GetPlacedBids,
        name='getPlacedBids'
    ),

], debug=True)
