import urllib
import json
from oauth2client.tools import argparser


class OCWSearch:

    def search(self, search_str):
        query = "http://www.ocwsearch.com/api/v1/search.json?q="
        query += search_str
        query += "&page=1&contact=http%3a%2f%2fwww.learningdollars.com"
        f = urllib.urlopen(query)
        s = f.read()
        json_conv = json.loads(s)
        return_courses = ["", "", ""]
        for subheading in json_conv:
            if subheading == 'Results':
                for r in json_conv['Results']:
                    if r == '1':
                        return_courses[0] = json_conv['Results']['1']
                    if r == '2':
                        return_courses[1] = json_conv['Results']['2']
                    if r == '3':
                        return_courses[2] = json_conv['Results']['3']
        f.close()
        return return_courses
