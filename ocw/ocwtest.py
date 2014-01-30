import urllib
from oauth2client.tools import argparser
if __name__ == "__main__":
  argparser.add_argument("--q", help="Search term", default="Google")
  args = argparser.parse_args()
  query = "http://www.ocwsearch.com/api/v1/search.json?q="
  query += args.q
  # So this should probably be changed to learningdollars.com or something
  query += "&page=1&contact=http%3a%2f%2fwww.penis.com"
  f = urllib.urlopen(query)
  s = f.read()
  print s
  f.close()
