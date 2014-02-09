$(document).ready(function() {
	console.log("javascript!!! ");
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("init!!!! ");
    $(".bid_submit").click(make_bid_request);
}

function make_bid_request(e) {
	id = this.getAttribute('projectid');
	console.log('attr id' + id)
	amount = $("#amount").val();
	days = $("#days").val();
	description = $("#description").val();
	$.get('/bidonproject/' + id + '/' + amount + '/' + days + '/' + description, function(data){
		response = data['json-result'];
		console.log(response);
	})
}
