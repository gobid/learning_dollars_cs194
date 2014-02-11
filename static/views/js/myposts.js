$(document).ready(function() {

	$.get('/getprojectbids/1034', function(data){
		bids = data['json-result']['items']
		for (var b in bids){
			$('#bids-on-post').append('<li>' + bids[b].descr + ' ' 
				+ '($' + bids[b].bid_amount + ') ' + 
				'<button class="btn btn-default bid"' + 
				' project_id = "' + '1034'  + '" user_id = "' 
				+ bids[b].provider_userid + '" >Pick</button>' + '</li>'
			)
		}
	})

	$.get('/postsinfo', function(data){
		console.log(data)
		numPosts = data['json-result']['count']
		if(numPosts > 0) {
			posts = data['json-result']['items']
			for (var p in posts){
				project = posts[p]
				console.log(project.projectname)
				$('#posted_projects').append('<tr><td>'+project.projectname+ 
					'</td><td>'+ project.additionalstatus + '</td><td>'+ 
					project.averagebid+'</td><td>' + project.bidcount+ 
					'</td><td>'+project.enddate+'</td><td>'+project.projectid + 
					'</td><td>'+ project.projecturl+'</td></tr>')
			}
		}
	})

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

	$("#post_project").click(post_project)

})

function accept_bid(accepted, projectid, state) {
	$('#log_message').remove()
	$.get('/acceptbid/' + projectid + '/' + state, function(data){
		response = data['json-result']
		console.log(response)
		if(response) {
			status = response['statusconfirmation']
			$("#create_milestone").after('<h2 id="log_message">' +
				'Bid acceptance/decline submitted successfully.</h2>')
		} else {
			$("#create_milestone").after('<h3 id="log_message">' + 
				'Error, submit again</h3>')
		}
	})
}

function post_project(e) {
	$('#log_message').remove()
	name = $("#name").val()
	description = $("#description").val()
	type = $("#type").val()
	budget_option = $("#budget_option option:selected").attr("value")
	duration = $("#duration").val()
	$.get('/postnewproject/' + name + '/' + description + '/' + type + '/' + 
		budget_option + '/' + duration, function(data){
			response = data['json-result']
			if(response) {
				url = response['projecturl']
				$("#post_project").after("<h2 id='log_message'>Project " + 
					"sucessfully posted, see url to view on freelancer: " +
					 url + "</h2>")
			} else {
				response = data['errors'];
				if (!response) response = data['error'];
				else response = response['error']['longmsg'];
				if (!($('.alert.alert-warning')[0])) {
					var alertDiv = document.createElement('div');
					alertDiv.className ='alert alert-warning';
					var spaceMe = document.createElement('hr');
					document.getElementsByClassName('post_project')[0].appendChild(spaceMe);
					document.getElementsByClassName('post_project')[0].appendChild(alertDiv);
				}
				$('.alert.alert-warning').html(response);
			}
		}
	)
}
