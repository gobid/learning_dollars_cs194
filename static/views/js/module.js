$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $(".bid_submit").click(make_bid_request);
    $(".bid_retract").click(retract_bid);
}

function make_bid_request(e) {
	id = this.getAttribute('projectid');
	amount = $("#amount").val();
	days = $("#days").val();
	description = $("#description").val();
	$.get('/bidonproject/' + id + '/' + amount + '/' + days + '/' + description, function(data){
		response = data['json-result'];
		if(response) {
			responseGood = response['statusconfirmation'];
			console.log('RESPONSE!: ' + responseGood);
			$("#" + id).text('Update bid');
			$("#" + id).after("<button type='button' class='btn btn-default btn-lg bid_retract' projectid ='" + id + "' id='r" + id + "'>Retract Bid</button>");
			initializePage();
			console.log(id);
		} else {
			response = data['errors'];
			if (!response) response = data['error'];
			else response = response['error']['longmsg'];
			if (!($('.alert.alert-warning')[0])) {
				var alertDiv = document.createElement('div');
				alertDiv.className ='alert alert-warning';
				document.getElementsByClassName('place-bid')[0].appendChild(alertDiv);
			}
			$('.alert.alert-warning').text(response);
			console.log('OMG ERROR!');
		}
	})
}


function retract_bid(e) {
	projectid = this.getAttribute('projectid');
	id = this.getAttribute('id');
	console.log(id);
	$.get('/retractbid/' + projectid, function(data){
					console.log(data);
		response = data['json-result'];
		if(response) {

			responseGood = response['statusconfirmation'];
			console.log('RESPONSE!: ' + responseGood);
			$("#" + id).text('Place Bid');
			$(".form-control").val("");
			$("#" + id).remove();
			$("#" + projectid).text('Place bid');
		} else {
			console.log('OMG ERROR!');
		}
	})
}