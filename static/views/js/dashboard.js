$(document).ready(function() {

	// My Posts handlers (Tim & Govi)

	$("#post_project").click(post_project);

	$.get('/postsinfo', function(data){
		posts = data['json-result']['items'];
		for (var p in posts){
			project = posts[p];
			$('#posted_projects').append('<tr><td>'+project.projectname+'</td><td>'+ project.additionalstatus + '</td><td>'+ project.averagebid+'</td><td>' + project.bidcount+'</td><td>'+project.enddate+'</td><td>'+project.projectid + '</td><td>'+ project.projecturl+'</td></tr>');
		}
	})


	$.get('/getplacedbids', function(data){
		data = jQuery.parseJSON(data)
		console.log(data)
		bids = data['json-result']['items']
		count = data['json-result']['count']
		console.log(count)
		if(count != 0) {
			console.log("hitttt1");
			for (var b in bids){
				bid = bids[b];
				console.log(bid.projectname);
				$('#all_placed_bids').append('<tr><td>'+bid.projectname+'</td><td>'+bid.bidcount+"</td><td><a href='"+bid.projecturl+"'>Link</a></td><td>"+bid.enddate+'</td></tr>');
			}
		} else {
			console.log("hittttt2");
			$('#my_bids_hdr').after('<p>You have no bids at this time</p>');

		}
	})


	$.get('/getprojectbids/1034', function(data){
		bids = data['json-result']['items']
		for (var b in bids){
			$('#bids-on-post').append('<li>' + bids[b].descr + ' ' 
				+ '($' + bids[b].bid_amount + ') ' + 
				'<button class="btn btn-default bid"' + 
				' project_id = "' + '1034'  + '" user_id = "' 
				+ bids[b].provider_userid + '" >Pick</button>' + '</li>')
		}
	})



	// My Bids handlers (Will)

	$(document).on('click', '.btn.btn-default.bid', function(){
		bid_button = $(this)
		project_id = bid_button.attr('project_id')
		user_id = bid_button.attr('user_id')
		console.log(project_id, user_id)
		$.get('/selectwinner/' + project_id + '/' + user_id, function(resp){
			bid_button.css('display', 'none')
			console.log(resp)
		})
	})

	// Mailbox handlers (Leo)

/*
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
				setTimeout(function(){ 
					$('#newMessage').find('form')[0].reset() 
				}, 3000)
			} else {
				result = data['errors']
				error_txt = result['error'].longmsg
				$('#newMessage').append("<h4 class=\"response\">" + error_txt.toUpperCase() + "</h4>")
			}
			setTimeout(function(){ 
				$('.response').fadeOut() 
			}, 3000)
		})
	})

*/
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

