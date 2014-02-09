$(document).ready(function() {

	// My Posts handlers (Tim & Govi)

	$.get('/getprojectbids/8', function(data){
		bids = data['json-result']['items']
		for (var b in bids){
			$('#bids-on-post').append('<li>' + bids[b].descr + ' ' 
				+ '($' + bids[b].bid_amount + ') </li>')
		}
	})

	// My Bids handlers (Will)

	// Mailbox handlers (Leo)

})