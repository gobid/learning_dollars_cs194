$(document).ready(function() {

	// My Posts handlers (Tim & Govi)
/*
	$("#post_project").click(post_project);
*/

	$("#create_milestone_payment").click(create_milestone_payment);

	$(document).on('click', '.btn.btn-default.accept_bid', function() {
		projectid = $(this).attr('projectid');
		state = $(this).attr('state');
		accept_bid(1, projectid, state);
	})

	$(document).on('click', '.btn.btn-default.decline_bid',  function() {
		projectid = $(this).attr('projectid');
		state = $(this).attr('state');
		accept_bid(0, projectid, state);
	})

/*
	$.get('/postsinfo', function(data){
		posts = data['json-result']['items'];
		for (var p in posts){
			project = posts[p];
			$('#posted_projects').append('<tr><td>'+project.projectname+'</td><td>'+ project.additionalstatus + '</td><td>'+ project.averagebid+'</td><td>' + project.bidcount+'</td><td>'+project.enddate+'</td><td>'+project.projectid + '</td><td>'+ project.projecturl+'</td></tr>');
		}
	})
*/
	$.get('/getincomingmilestonelist', function(data){
		milestones = data['json-result']['items']
		for (var m in milestones){
			milestone = milestones[m]
			$('#milestone_list').append(
				'<tr><td>' + milestone.id + '</td><td>'
				+ milestone.username + '</td><td>' + milestone.date +
				'</td><td>' 
				+ milestone.projectid + '</td><td>' + milestone.projectname + 
				'</td><td>'
				+ milestone.reason + 
				' <button type = "button" transaction_id = "' + milestone.id +
				'" class = "btn btn-default requestrelease">'
				+ 'Request Release Milestone</button>'+ '</td></tr>'
			)
		}
	})

	$.get('/getoutgoingmilestonelist', function(data){
		milestones = data['json-result']['items']
		for (var m in milestones){
			milestone = milestones[m]
			$('#milestone_list').append(
				'<tr><td>' + milestone.id + '</td><td>'
				+ milestone.username + '</td><td>' + milestone.date + 
				'</td><td>' + milestone.projectid + '</td><td>' + 
				milestone.projectname+'</td><td>' + milestone.reason + 
				' <button type = "button" transaction_id = "' + milestone.id
				+ '" class = "btn btn-default release">'
				+ ' Release Milestone</button>' + '</td></tr>'
			)
		}
	})

	$(document).on('click', '.btn.btn-default.requestrelease', function(){
		console.log('requested release')
		transaction_id = $(this).attr('transaction_id')
		console.log(transaction_id)
		$.get('/requestreleasemilestone/' + transaction_id, function(resp){
			console.log(resp)
		})
	})

	$(document).on('click', '.btn.btn-default.release', function(){
		console.log('release')
		transaction_id = $(this).attr('transaction_id')
		console.log(transaction_id)
		// using Sir right now, must replace with real name once that is added 
		// to Account
		s = $('#signature').val()
		$.get('/releasemilestone/' + transaction_id + '/' + s, function(resp){
			console.log(resp)
		})
	})


/*
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
				$('#all_placed_bids').append(
					'<tr>' + '<td>' + bid.projectname + '</td>' + 
					'<td>' + bid.bidcount + '</td>' + 
					'<td><a href = "' + bid.projecturl + '">Link</a></td>' + 
					'<td>' + bid.enddate + '</td>' + 
					'<td><button type="Submit" state = "1" projectid="' + bid.projectid + 
					'" class="btn btn-default accept_bid">Accept</button>' + 
					'<button value="Submit" state = "0" projectid="' + bid.projectid + '"'
					+ ' class="btn btn-default decline_bid">Decline</button>'
					+ '</td></tr>'
				);
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
*/

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


	$('#messageTabs a').click(function (e) {
	  	e.preventDefault()
	  	$(this).tab('show')
	})

	$.get('/inboxMessages', function(data) {
		messages = data['json-result']['items']

		for (var m in messages) {
			$.get('/projectDetails/'+messages[m].projectid, function(projectData) {
				details = projectData['json-result']

				$('#inboxMessages').append('<tr><td>' + messages[m].fromusername 
				+ '</td><td>' + messages[m].text + '</td><td><a href=\"' + details.url
				+ '\">' + details.name + ' (' + messages[m].projectid + ')</a></td></tr>')
			})
		}
	})

	$.get('/sentMessages', function(data) {
		messages = data['json-result']['items']

		for (var m in messages) {
			$.get('/projectDetails/'+messages[m].projectid, function(projectData) {
				details = projectData['json-result']

				$('#sentMessages').append('<tr><td>' + messages[m].tousername 
				+ '</td><td>' + messages[m].text + '</td><td><a href=\"' + details.url
				+ '\">' + details.name + ' (' + messages[m].projectid + ')</a></td></tr>')
			})
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

function create_milestone_payment(e) {
	console.log('in create milestone payment')
	$('#log_message').remove();
	projectid = $("#projectid").val();
	amount = $("#amount").val();
	tousername = $("#tousername").val();
	reasontext = $("#reasontext").val();
	reasontype = $("#reasontype option:selected").attr("value");
	// hardcoded in 1 for usd but this has to change potentially
	$.get('/createmilestonepayment/' + projectid + '/' + amount + '/1/' + tousername + '/' + reasontext + '/' + reasontype, function(data){
		response = data['json-result'];
		if(response) {
			status = response['statusconfirmation'];
			$("#create_milestone").after("<h2 id='log_message'>Milestone created successfully.</h2>");
		} else {
			$("#create_milestone").after("<h3 id='log_message'>Error, submit again</h3>");
		}
	})
}

function accept_bid(accepted, projectid, state) {
	$('#log_message').remove()
	$.get('/acceptbid/' + projectid + '/' + state, function(data){
		response = data['json-result']
		console.log(response)
		if(response) {
			status = response['statusconfirmation']
			$("#create_milestone").after('<h2 id="log_message">' +
				'Bid acceptance/decline submitted successfully.</h2>');
		} else {
			$("#create_milestone").after('<h3 id="log_message">' + 
				'Error, submit again</h3>');
		}
	})
}

