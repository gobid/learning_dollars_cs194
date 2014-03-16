$(document).ready(function() {
    // initialize page
	var datalink = $("#datalink").val();
	$.get(datalink, function(data){
		console.log(data);
		$("body").append(Templates.module(data));
		
		/* START jQuery Methods */

		initializePage();
		
		/* END jQuery Methods */
	});

	$(document).on("click", ".btn.btn-default#helpful", function() {
		var moduleID = $(this).attr("moduleID");
		var courseTitle = $(this).attr("courseTitle");
		upvote(moduleID, courseTitle);
	});

	$(document).on("click", ".btn.btn-default#nothelpful", function() {
		var moduleID = $(this).attr("moduleID");
		var courseTitle = $(this).attr("courseTitle");
		downvote(moduleID, courseTitle);
	});

});

$(function () {
        $("body").popover({
            selector: "[data-toggle='popover']",
            html: true,
            title: function() {
            	return $("#popover-head").html();
            },
            content: function() {
            	return $("#popover-content").html();
            }
        });

 });

function upvote(moduleID, courseTitle) {
    $.get("/upvote/" + moduleID+ "/" + courseTitle, function(data){
        var response = data["success"];
		if(response) {
			//var status = response['statusconfirmation']
            $(".coursescore").after(data["success"]);
		} else {
			$(".coursescore").after(data["error"]);
		}
	});
}


function downvote(moduleID, courseTitle) {
	$.get("/downvote/" + moduleID + "/" + courseTitle, function(data){
		var response = data["success"];
		if(response) {
			//var status = response['statusconfirmation']
			$(".coursescore").after(data["success"]);
		} else {
			$(".coursescore").after(data["error"]);
		}
	});
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("[id^='bid_submit']").click(function() {
    	make_bid_request(event.target.id);
    });
}

function toggle_form(e) {
	this.set
}

function make_bid_request(elementid) {
	console.log(elementid);
	projectid = $("#" + elementid).attr("jobid");
	$.get('/bidonproject/' + projectid, function(response){
		if(response === "success") {
			console.log("SUCESSSSS");
			responseGood = response['statusconfirmation'];
			// if ($("#r" + id).size() == 0) {
			// 	$("#" + id).text('Update bid');
			// 	$("#" + id).after("<button type='button' class='btn" + 
			// 		" btn-default btn-lg bid_retract' projectid ='" + id +
			// 		"' id='r" + id + "'>Retract Bid</button>");
			// 	initializePage();
			// }
		} else {
			console.log(response);
			// response = data['errors'];
			// if (!response) response = data['error'];
			// else response = response['error']['longmsg'];
			// if (!($('.alert.alert-warning')[0])) {
			// 	// nothing + id gives button
			// 	console.log('id ' + id)
			// 	$('#' + id).after('<div class = "alert alert-warning">' + 
			// 		response + '</div>') 
			// }
		}
	});
}