$(document).ready(function(){

	// initialize runtime js template
	$("body").append(Templates.mybids());

	/* START jQuery Methods */
	
	$.get('/getplacedbids', function(data){
		data = jQuery.parseJSON(data)
		bids = data['json-result']['items']
		count = data['json-result']['count']
		if(count != 0) {
			for (var b in bids){
				bid = bids[b]
				$('#all_placed_bids').append(
					'<tr>' + '<td>' + bid.projectname + '</td>' + 
					'<td>' + bid.bidcount + '</td>' + 
					'<td><a href = "' + bid.projecturl + '">Freelancer Website</a></td>' + 
					'<td>' + bid.enddate + '</td>' + 
					'<td><button type="Submit" state = "1" projectid="' + 
					bid.projectid + 
					'" class="btn btn-default accept_bid">Accept</button> ' + 
					'<button value="Submit" state = "0" projectid="' + 
					bid.projectid + 
					'" class="btn btn-default decline_bid">Decline</button>'
					+ '</td></tr>'
				)
			}
		} else {
			$('#my_bids_hdr').after('<p>You have no bids at this time</p>')
		}
	})

	// Accept Bid Won
	$(document).on('click', '.btn.btn-default.accept_bid', function() {
		projectid = $(this).attr('projectid')
		state = $(this).attr('state')
		accept_bid(1, projectid, state)
	})

	// Decline Bid Won
	$(document).on('click', '.btn.btn-default.decline_bid',  function() {
		projectid = $(this).attr('projectid')
		state = $(this).attr('state')
		accept_bid(0, projectid, state)
	})

	/* END jQuery Methods*/

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
