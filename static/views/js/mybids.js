$(document).ready(function(){

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

})