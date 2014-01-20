from django.conf.urls.defaults import *
from django.contrib import admin
import dbindexer

# patch for using class based template views 
# see http://stackoverflow.com/questions/11428427/no-module-named-simple-error-in-django?rq=1
from django.conf.urls import patterns, url, include
from django.views.generic import TemplateView
 
handler500 = 'djangotoolbox.errorviews.server_error'

# django admin
admin.autodiscover()

# search for dbindexes.py in all INSTALLED_APPS and load them
dbindexer.autodiscover()

urlpatterns = patterns('',
    ('^_ah/warmup$', 'djangoappengine.views.warmup'),
    ('^$', TemplateView.as_view(template_name="home.html")),
    ('^admin/', include(admin.site.urls)),
)
