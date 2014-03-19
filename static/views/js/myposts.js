/*global Templates:false */

$(document).ready(function() {

	// initialize page
	"use strict";
	$("body").append(Templates.myposts());
	$.get("/postsinfo", function(data){
		var numPosts = data.length;
		$("#projects_loader").remove();
		if(numPosts > 0) {
			for (var p in data){
				var project = data[p];
				$("#posted_projects").append(
					Templates.posted_projects(project)
				);
			}
		}
		else {
			$("#posted_projects").append(
				Templates.no_posts()
			);
		}
	});

	$("#post_project").click(post_project);
	
	var modulesArray = [];
	$.get("/modulesinfo", function(modules){
		for(var i = 0; i < modules.length; i++) {
			modulesArray.push(modules[i].name);
		}

		var substringMatcher = function(strs) {
		  return function findMatches(q, cb) {
		    var matches, substrRegex;
		    matches = [];
		    substrRegex = new RegExp(q, "i");
		    $.each(strs, function(i, str) {
		      if (substrRegex.test(str)) {
		        matches.push({ value: str });
		      }
		    });
		 
		    cb(matches);
		  };
		};

		$("#test .typeahead").typeahead({
		  hint: true,
		  highlight: true,
		  minLength: 1
		},
		{
		  name: "modulesArray",
		  displayKey: "value",
		  source: substringMatcher(modulesArray)
		});

	});

});

function post_project() {
	"use strict";
	$("#log_message").remove();
	var name = $("#name").val();
	var description = $("#description").val();
	var budget_option = $("#budget_option option:selected").text();
	var duration = $("#duration").val();
	var job_type = $("#job_type").val();
	$.get("/postnewproject/" + name + "/" + description + "/" + job_type +
		"/" + budget_option + "/" + duration, function(data){
			if(data) {
				$("#log_message_div").after(Templates.post_success);
			} else {
				$("#log_message_div").after(Templates.post_failure);
			}
		}
	).fail(function(){
		$("#log_message_div").after(Templates.post_failure);
	});
}
