$(document).ready(function() {

	$('#messageTabs a').click(function (e) {
	  	e.preventDefault()
	  	$(this).tab('show')
	})

	$('#inboxTab').click(getMessages('inboxMessages'))

	$('#sentTab').click(getMessages('sentMessages'))

	$('#sendBtn').click(function (e) {
		e.preventDefault()
		projectId = $('#project_id').val()
		messageText = $('#message_text').val()
		toUserName = $('#to_user_name').val()
		url = '/sendMessage/' + projectId + '/' + messageText + 
			'/' + toUserName

		$.get(url, function(data) {
			result = data['json-result']
			if(result){
				$('#newMessage').append("<h4 class=\"response\">SEND!</h4>")
				setTimeout(function(){ 
					$('#newMessage').find('form')[0].reset() 
				}, 3000)
			} else {
				result = data['errors']
				error_txt = result['error'].longmsg
				$('#newMessage').append("<h4 class=\"response\">" + 
					error_txt.toUpperCase() + "</h4>")
			}
			setTimeout(function(){ 
				$('.response').fadeOut() 
			}, 3000)
		})
	})
})

// Helper Functions
function getMessages(url) {
	$('#'+url).append('<h4 class=\"loading\">Loading...</h4>')
	$.get('/'+url, function(data) {
		numMessages = data['json-result']['count']
		if (numMessages != 0) {
			messages = data['json-result']['items']

			for (var m in messages) {
				project_id = messages[m].projectid
				text = messages[m].text
				project_name = messages[m].project_name
				project_url = message[m].project_url
 				username = ''
				if (url == 'inboxMessages') username = messages[m].fromusername
				else username = messages[m].tousername

				$('#'+url).append('<tr><td>' + 
					username + '</td><td>' + 
					text + '</td><td><a href=\"' 
					+ project_url + '\">' + project_name + ' (' + 
					project_id + ')</a></td></tr>')
			}
			$('.loading').fadeOut()
		}
	})
}