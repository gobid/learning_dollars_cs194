$(document).ready(function() {
    // initialize page
	var datalink = $("#datalink").val();
	$.get(datalink, function(data){
		$("body").append(Templates.module(data));
		
		/* START jQuery Methods */

		initializePage();

	});


		
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

	$(document).on("click", "#submitSuggestion", function() {
		var moduleID = $(this).attr("moduleID");
		var courseURL = $("#suggestURL").val();
		var title = $("#suggestTitle").val();
		var institution = $("#suggestInstitution").val();
		var teachDate = $("#suggestTeachDate").val();
		var instructors = $("#suggestInstructors").val();
		var description = $("#suggestDesc").val();
		var materials = $("#suggestMaterials").val();
		alert("here");
		addCourse(moduleID, courseURL, title, institution, teachDate, instructors, description, materials);
	})


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


function addCourse(moduleID, courseURL, title, institution, teachDate, instructors, description, materials) {
    $.get("/addcourse/" + moduleID + "/" + encodeURIComponent(courseURL) + "/" + title + "/" + institution + "/" + teachDate + "/" + instructors + "/" + description + "/" + encodeURIComponent(materials), function(data){
        var response = data["success"];
		if(response) {
			alert("submitted successfully");
		} else {
			alert("no");
		}
	});
}

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
	var projectid = $("#" + elementid).attr("jobid");
	$.get("/bidonproject/" + projectid, function(response){
		if(response === "Success") {
			var string = "#bid_submit" + elementid;
			$("#bid_submit" + projectid).remove();
			$(".projectstatus" + projectid).append(Templates.bid_success());
			//remove button. say bid already placed
		} else {
			$("#bid_submit" + projectid).remove();
			$(".projectstatus" + projectid).append(Templates.bid_failure());
		}
	});
}