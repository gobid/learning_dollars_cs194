$(document).ready(function() {

	// Load incoming milestones
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

	// Load outgoing milestones
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

	// Request Release Milestone
	$(document).on('click', '.btn.btn-default.requestrelease', function(){
		console.log('requested release')
		transaction_id = $(this).attr('transaction_id')
		console.log(transaction_id)
		$.get('/requestreleasemilestone/' + transaction_id, function(resp){
			console.log(resp)
		})
	})

	// Release Milestone
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

	$("#create_milestone_payment").click(create_milestone_payment)
})

function create_milestone_payment(e) {
	console.log('in create milestone payment')
	$('#log_message').remove()
	projectid = $("#projectid").val()
	amount = $("#amount").val()
	tousername = $("#tousername").val()
	reasontext = $("#reasontext").val()
	reasontype = $("#reasontype option:selected").attr("value")
	// hardcoded in 1 for usd but this has to change potentially
	$.get('/createmilestonepayment/' + projectid + '/' + amount + '/1/' + 
		tousername + '/' + reasontext + '/' + reasontype, function(data){
			response = data['json-result']
			if(response) {
				status = response['statusconfirmation']
				$("#create_milestone").after("<h2 id='log_message'>" + 
					"Milestone created successfully.</h2>")
			} else {
				$("#create_milestone").after("<h3 id='log_message'>" + 
					"Error, submit again</h3>")
			}
		}
	)
}
