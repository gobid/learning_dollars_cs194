$(document).ready(function() {

	// My Posts handlers (Tim & Govi)


	$("#post_project").click(post_project);

	$.get('/postsinfo', function(data){
		posts = data['json-result']['items'];
		for (var p in posts){
			project = posts[p];
			$('#posted_projects').append('<tr><td>'+project.projectname+'</td><td>'+ project.additionalstatus + '</td><td>'+ project.averagebid+'</td><td>' + project.bidcount+'</td><td>'+project.enddate+'</td><td>'+project.projectid + '</td><td>'+ project.projecturl+'</td></tr>');

		}
		// 	$('#bids-on-post').append('<li>' + bids[b].descr + ' ' 
		// 		+ '($' + bids[b].bid_amount + ') </li>')
		// }
	})

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

