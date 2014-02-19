$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $(".bid_submit").click(make_bid_request);
    $(".bid_retract").click(retract_bid);
    $("[id^=job_container_toggle]").click(function() {
    	var jobid = $(this).attr("jobid");
    	if($("#job_container"+jobid).attr("style") == "")
    	{
    		console.log("hit1");
    		$("#job_container"+jobid).attr("style", "display: none");
    	} else {
    		$("#job_container"+jobid).attr("style", "");
    	}
    });
}

function toggle_form(e) {
	this.set
}

function make_bid_request(e) {
	id = this.getAttribute('projectid');
	amount = $("#amount"+id).val();
	days = $("#days"+id).val();
	description = $("#description"+id).val();
	$.get('/bidonproject/' + id + '/' + amount + '/' + days + '/' + description, function(data){
		response = data['json-result'];
		if(response) {
			responseGood = response['statusconfirmation'];
			if ($("#r" + id).size() == 0) {
				$("#" + id).text('Update bid');
				$("#" + id).after("<button type='button' class='btn" + 
					" btn-default btn-lg bid_retract' projectid ='" + id +
					"' id='r" + id + "'>Retract Bid</button>");
				initializePage();
			}
		} else {
			response = data['errors'];
			if (!response) response = data['error'];
			else response = response['error']['longmsg'];
			if (!($('.alert.alert-warning')[0])) {
				// nothing + id gives button
				console.log('id ' + id)
				$('#' + id).after('<div class = "alert alert-warning">' + 
					response + '</div>') 
			}
		}
	})
}


function retract_bid(e) {
	projectid = this.getAttribute('projectid');
	id = this.getAttribute('id');
	$.get('/retractbid/' + projectid, function(data){
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