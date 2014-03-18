/*global Templates:false */

$(document).ready(function() {
    // initialize page
    "use strict";
	var datalink = $("#datalink").val();
	$.get(datalink, function(data){
		$("body").append(Templates.module(data));
		
		/* START jQuery Methods */

		initializePage();
	});

		/* END jQuery Methods */
});

	$(document).on("click", ".btn.btn-default#helpful", function() {
		"use strict";
		var moduleID = $(this).attr("moduleID");
		var courseID = $(this).attr("courseID");
		var count = $(this).attr("count");
		upvote(moduleID, courseID, count);
	});

	$(document).on("click", ".btn.btn-default#nothelpful", function() {
		"use strict";
		var moduleID = $(this).attr("moduleID");
		var courseID = $(this).attr("courseID");
		var count = $(this).attr("count");
		downvote(moduleID, courseID, count);
	});

	$(document).on("click", "#submitSuggestion", function() {
		"use strict";
		var moduleID = $(this).attr("moduleID");
		var courseURL = $("#suggestURL").val();
		var title = $("#suggestTitle").val();
		var institution = $("#suggestInstitution").val();
		var teachDate = $("#suggestTeachDate").val();
		var instructors = $("#suggestInstructors").val();
		var description = $("#suggestDesc").val();
		var materials = $("#suggestMaterials").val();
		addCourse(moduleID, courseURL, title, institution, teachDate,
			instructors, description, materials);
	});

function addCourse(moduleID, courseURL, title, institution, teachDate,
	instructors, description, materials) {
	"use strict";
    $.get("/addcourse/" + moduleID + "/" + encodeURIComponent(courseURL) +
     "/" + title + "/" + institution + "/" + teachDate + "/" + instructors +
      "/" + description + "/" + encodeURIComponent(materials), function(data){
        var response = data.success;
		if(response) {
			$("#suggestionText").append(Templates.course_success());
		} else {
			$("#suggestionText").append(Templates.course_failure());
		}
		setTimeout(function(){
			$(".alert").fadeOut();
		}, 3000);
	}).fail(function(){
		$("#suggestionText").append(Templates.course_failure);
		setTimeout(function(){
			$(".alert").fadeOut();
		}, 3000);
	});
}

function upvote(moduleID, courseID, count) {
	"use strict";
    $.get("/upvote/" + moduleID+ "/" + courseID, function(data){
        var response = data.success;
		if(response) {
			var newScore = data.newScore;
			data.count = count;
			if (newScore == 1) {
				$("#coursescore"+count).html
					(Templates.post_voting_single(data));
			} else {
				$("#coursescore"+count).html
					(Templates.post_voting_multiple(data));
			}
            $("#rank"+count).attr("class", "text-success");
        } else {
			$("#coursescore"+count).append(Templates.vote_failure());
			setTimeout(function(){
					$(".alert").fadeOut();
			}, 1000);
		}
	}).fail(function(){
		$("#coursescore"+count).append(Templates.vote_general_failure);
		setTimeout(function(){
			$(".alert").fadeOut();
		}, 3000);
	});
}


function downvote(moduleID, courseID, count) {
	"use strict";
	$.get("/downvote/" + moduleID + "/" + courseID, function(data){
		var response = data.success;
		if(response) {
			var newScore = data.newScore;
			data.count = count;
			if (newScore == 1) {
				$("#coursescore"+count).html
					(Templates.post_voting_single(data));
			} else {
				$("#coursescore"+count).html
					(Templates.post_voting_multiple(data));
			}
			$("#rank"+count).attr("class", "text-danger");
		} else {
			$("#coursescore"+count).append(Templates.vote_failure());
			setTimeout(function(){
					$(".alert").fadeOut();
			}, 1000);
		}
	}).fail(function(){
		$("#coursescore"+count).append(Templates.vote_general_failure);
		setTimeout(function(){
			$(".alert").fadeOut();
		}, 3000);
	});
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	"use strict";
    $("[id^='bid_submit']").click(function() {
		make_bid_request(event.target.id);
    });
}

function make_bid_request(elementid) {
	"use strict";
	var projectid = $("#" + elementid).attr("jobid");
	$.get("/bidonproject/" + projectid, function(response){
		if(response === "Success") {
			$("#bid_submit" + projectid).remove();
			$(".projectstatus" + projectid).append(Templates.bid_success());
			//remove button. say bid already placed
		} else {
			$("#bid_submit" + projectid).remove();
			$(".projectstatus" + projectid).append(Templates.bid_failure());
		}
	});
}