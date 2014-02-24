from apiclient.discovery import build
from apiclient.errors import HttpError
from oauth2client.tools import argparser

# Set DEVELOPER_KEY to the API key value from the APIs & auth > Registered
# apps tab of https://cloud.google.com/console
# Please ensure that you have enabled the YouTube Data API for your project.

from config import config

MAX_RESULTS = 25


class Youtube:

  def search(self, search_str):
    youtube = build(config.YOUTUBE_API_SERVICE_NAME, 
                    config.YOUTUBE_API_VERSION,
                    developerKey=config.DEVELOPER_KEY)
    # Call the search.list method to retrieve results matching the specified
    # query term.
    
    search_response = youtube.search().list(
      q=search_str,
      part="id,snippet",
      maxResults=MAX_RESULTS
    ).execute()

    videos = []
    channels = []
    playlists = []

    # Add each result to the appropriate list, and then display the lists of
    # matching videos, channels, and playlists.
    
    for search_result in search_response.get("items", []):
      if search_result["id"]["kind"] == "youtube#video":
        videos.append("%s" % (search_result["id"]["videoId"]))
      elif search_result["id"]["kind"] == "youtube#channel":
        channels.append("%s" % (search_result["id"]["channelId"]))
      elif search_result["id"]["kind"] == "youtube#playlist":
        playlists.append("%s" % (search_result["id"]["playlistId"]))
      print search_result 
 
    if len(playlists) > 0:
      return playlists[:20], "playlist"
    elif len(videos) > 0:
      return videos[:20], "video"
    else:
      return '', "blank"
