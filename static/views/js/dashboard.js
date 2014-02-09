$(document).ready(function() {

	// My Posts handlers (Tim & Govi)

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

})