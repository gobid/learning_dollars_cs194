$(document).ready(function(){
	var datalink = $("#datalink").val();
	$.get(datalink, function(info){
		$("body").append(Templates.project(info));
		// end_date won't work until tim's model changes come in
		// then do in reverse end date order

		/* START jQuery Methods */
		
		var project_id = info.projectid;
		$.get("/getprojectbids/" + project_id, function(data){
			$("#bids_loader").remove();
			console.log(data);
			if (data.winner) {
				$("#bids").append(
					Templates.winner_chosen()
				);
			}
			else {
				for (b in data) {
					var bidder = data[b];
					$("#bids").append(
						Templates.bids_on_post({
							'bidder_id': bidder.id,
							'bidder': bidder.email,
							'projectid': project_id,
							'is_owner': bidder.is_owner
						})
					);
				}
			}
		});

		$(document).on("click", ".bid", function(){
			var bid_button = $(this);
			var project_id = bid_button.attr("project_id");
			var user_id = bid_button.attr("bidder_id");
			console.log("clicked", project_id, user_id);
			$.get("/choosewinner/" + project_id + "/" + user_id, function(resp){
				console.log(resp);
				bid_button.css("display", "none");
			});
		});

		/* END jQuery Methods */
	});
});