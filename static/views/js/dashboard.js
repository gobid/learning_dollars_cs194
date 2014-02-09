$(document).ready(function() {

	// My Posts handlers (Tim & Govi)


	$("#post_project").click(post_project);

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

		for (var m in messages) {
			$('#inboxMessages').append('<tr><td>' + messages[m].fromusername 
				+ '</td><td>' + messages[m].text + '</td></tr>')
		}
	})

	$.get('/sentMessages', function(data) {
		messages = data['json-result']['items']

		for (var m in messages) {
			$('#sentMessages').append('<tr><td>' + messages[m].tousername 
				+ '</td><td>' + messages[m].text + '</td></tr>')
		}
	})


	$('#sendBtn').click(function (e) {
		e.preventDefault();
		projectId = $('#project_id').val()
		messageText = $('#message_text').val()
		toUserName = $('#to_user_name').val()
		url = '/sendMessage/' + projectId + '/' + messageText + '/' + toUserName

		$.get(url, function(data) {
			result = data['json-result']
			if(result){
				$('#newMessage').append("<h4 class=\"response\">SEND!</h4>")
			} else {
				result = data['errors']
				error_txt = result['error'].longmsg
				$('#newMessage').append("<h4 class=\"response\">" + error_txt.toUpperCase() + "</h4>")
			}
			setTimeout(function(){ $('.response').fadeOut() }, 3000)
			$('#newMessage').find('form')[0].reset();
		})
	})
})

//Helper Functions

//Tim
function post_project(e) {
	$('#log_message').remove();
	name = $("#name").val();
	description = $("#description").val();
	type = $("#type").val();
	budget_option = $("#budget_option option:selected").attr("value");
	duration = $("#duration").val();
	$.get('/postnewproject/' + name + '/' + description + '/' + type + '/' + budget_option + '/' + duration, function(data){
		response = data['json-result'];
		if(response) {
			url = response['projecturl'];
			$("#post_project").after("<h2 id='log_message'>Project sucessfully posted, see url to view on freelancer: " + url + "</h2>");
		} else {
			$("#post_project").after("<h3 id='log_message'>Error, submit again</h3>");
		}
	})
}

// Leo


// Govi


// Will

