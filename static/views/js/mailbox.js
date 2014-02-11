$(document).ready(function() {

	$('#messageTabs a').click(function (e) {
	  	e.preventDefault()
	  	$(this).tab('show')
	})

	$.get('/inboxMessages', function(data) {
		messages = data['json-result']['items']

		for (var m in messages) {
			$.get('/projectDetails/'+messages[m].projectid, 
				function(projectData) {
					details = projectData['json-result']
					$('#inboxMessages').append('<tr><td>' + 
						messages[m].fromusername + '</td><td>' + 
						messages[m].text + '</td><td><a href=\"' + 
						details.url + '\">' + details.name + ' (' + 
						messages[m].projectid + ')</a></td></tr>')
				}
			)
		}
	})

	$.get('/sentMessages', function(data) {
		messages = data['json-result']['items']

		for (var m in messages) {
			$.get('/projectDetails/'+messages[m].projectid, 
				function(projectData) {
					details = projectData['json-result']
					$('#sentMessages').append('<tr><td>' + 
						messages[m].tousername + '</td><td>' + 
						messages[m].text + '</td><td><a href=\"' 
						+ details.url + '\">' + details.name + ' (' + 
						messages[m].projectid + ')</a></td></tr>')
				}
			)
		}
	})


	$('#sendBtn').click(function (e) {
		e.preventDefault();
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