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
		var count = $(this).attr("count");
		upvote(moduleID, courseTitle, count);
	});

	$(document).on("click", ".btn.btn-default#nothelpful", function() {
		var moduleID = $(this).attr("moduleID");
		var courseTitle = $(this).attr("courseTitle");
		var count = $(this).attr("count");
		downvote(moduleID, courseTitle, count);
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
		addCourse(moduleID, courseURL, title, institution, teachDate, instructors, description, materials);
	})


function addCourse(moduleID, courseURL, title, institution, teachDate, instructors, description, materials) {
    $.get("/addcourse/" + moduleID + "/" + encodeURIComponent(courseURL) + "/" + title + "/" + institution + "/" + teachDate + "/" + instructors + "/" + description + "/" + encodeURIComponent(materials), function(data){
        var response = data["success"];
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

function upvote(moduleID, courseTitle, count) {
    $.get("/upvote/" + moduleID+ "/" + encodeURIComponent(courseTitle), function(data){
        var response = data["success"];
		if(response) {
			var newScore = data["newScore"];
			data["count"] = count;
			if (newScore == 1) {
				$("#coursescore"+count).html(Templates.post_voting_single(data));
			} else {
				$("#coursescore"+count).html(Templates.post_voting_multiple(data));
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


function downvote(moduleID, courseTitle, count) {
	$.get("/downvote/" + moduleID + "/" + encodeURIComponent(courseTitle), function(data){
		var response = data["success"];
		if(response) {
			var newScore = data["newScore"];
			data["count"] = count;
			if (newScore == 1) {
				$("#coursescore"+count).html(Templates.post_voting_single(data));
			} else {
				$("#coursescore"+count).html(Templates.post_voting_multiple(data));
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