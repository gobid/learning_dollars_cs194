$(document).ready(function(){

	// initialize runtime js template
	$("body").append(Templates.mybids());

	/* START jQuery Methods */

	$.get("/getplacedbids", function(data){
		var count = data.length;
		var m_names = new Array("January", "February", "March",
			"April", "May", "June", "July", "August", "September",
			"October", "November", "December");
		if(count !== 0) {
			var bids = data;
			for (var b in bids){
				var bid = bids[b];
				var date_obj = new Date(bid.enddate);
				var date_str = m_names[date_obj.getMonth()] + " " +
				date_obj.getDate() + ", " + date_obj.getFullYear()
				bid.enddate = date_str; // waiting on tim to push enddate features
				$("#all_placed_bids").append(Templates.all_bids(bid));
			}
		} else {
			$("#all_placed_bids").after(Templates.no_bids());
		}
	});

	// Accept Bid Won
	$(document).on("click", ".btn.btn-default.accept_bid", function() {
		var projectid = $(this).attr("projectid");
		var state = $(this).attr("state");
		accept_bid(1, projectid, state);
	});

	// Decline Bid Won
	$(document).on("click", ".btn.btn-default.decline_bid",  function() {
		var projectid = $(this).attr("projectid");
		var state = $(this).attr("state");
		accept_bid(0, projectid, state);
	});

	/* END jQuery Methods*/

});

function accept_bid(accepted, projectid, state) {
	$("#log_message").remove();
	$.get("/acceptbid/" + projectid + "/" + state, function(data){
		var response = data["json-result"];
		if(response) {
			//var status = response['statusconfirmation']
			$("#create_milestone").after(Templates.accept_bid_success);
		} else {
			$("#create_milestone").after(Templates.accept_bid_error);
		}
	});
}
