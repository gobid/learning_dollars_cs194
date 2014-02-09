$(document).ready(function() {

	// My Posts handlers (Tim & Govi)

	$.get('/getprojectbids/1034', function(data){
		bids = data['json-result']['items']
		for (var b in bids){
			$('#bids-on-post').append('<li>' + bids[b].descr + ' ' 
				+ '($' + bids[b].bid_amount + ') </li>')
		}
	})

	// My Bids handlers (Will)

	// Mailbox handlers (Leo)

	$('#messageTabs a').click(function (e) {
	  	e.preventDefault()
	  	$(this).tab('show')
	})

	$.get('/inboxMessages', function(data) {
		messages = data['json-result']['items']
		
	})

	$('#sendBtn').click(function (e) {
		projectId = $('#project_id').val()
		messageText = $('#message_text').val()
		toUserName = $('#to_user_name').val()
		url = '/sendMessage/1034/' + messageText + '/' + toUserName
		window.console&&console.log(url)

		$.get(url, function(data) {
			$('#newMessage').append(data)
		})
	})
})