$(document).ready(function() {

	// My Posts handlers (Tim & Govi)

	$("#post_project").click(post_project);

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

function post_project(e) {
	console.log("hit!!!!");
	name = $("#name").val();
	description = $("#description").val();
	type = $("#type").val();
	budget_option = $("#budget_option option:selected").attr("value");
	duration = $("#duration").val();
	$.get('/postnewproject/' + name + '/' + description + '/' + type + '/' + budget_option + '/' + duration, function(data){
		response = data['json-result'];
		console.log(response);
	})
}