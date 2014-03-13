$(document).ready(function(){
	var datalink = $("#datalink").val();
	$.get(datalink, function(info){
		$("body").append(Templates.project(info));
		// end_date won't work until tim's model changes come in
		// then do in reverse end date order

		/* START jQuery Methods */
		
		var project_id = info.id;
		var winners = info.seller;
		console.log(winners);
		winner_ids = {};
		for (var w in winners){
			winner_ids[winners[w].id] = {
				awardStatus: winners[w].awardStatus
			};
		}
		console.log(winner_ids);
		$.get("/getprojectbids/" + project_id, function(data){
			var jr = data['json-result'];
			var count = jr.count;
			if (count !== 0){
				var bids = jr.items;
				$("#bids_loader").remove();
				for (var b in bids){
					var tmpl_obj;
					var provider_userid = parseInt(bids[b].provider_userid);
					// winner
					if (provider_userid in winner_ids){ 
						console.log(bids[b]);
						var awardStatus = winner_ids[provider_userid].awardStatus;
						tmpl_obj = {
							"bid": bids[b], 
							"projectid": project_id,
							"winner": true,
							"awardStatus": awardStatus
						};
					}
					// not winner
					else 
						tmpl_obj = {
							"bid": bids[b], 
							"projectid": project_id
						};
					console.log('tmpl_obj', tmpl_obj);
					$("#bids").append(
						Templates.bids_on_post(tmpl_obj)
					);
				}
			} else {
				console.log('trying');
				$("#bids_loader").remove();
				$("#bids").append(
					Templates.no_bids()
				);
			}
		});

		$(document).on("click", ".bid", function(){
			var bid_button = $(this);
			var project_id = bid_button.attr("project_id");
			var user_id = bid_button.attr("user_id");
			console.log("clicked", project_id, user_id);
			$.get("/selectwinner/" + project_id + "/" + user_id, function(resp){
				console.log(resp);
				bid_button.css("display", "none");
			});
		});

		/* END jQuery Methods */
	});
});