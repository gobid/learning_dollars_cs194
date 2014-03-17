$(document).ready(function() {

	// initialize page
	$("body").append(Templates.myposts());
	$.get("/postsinfo", function(data){
		var numPosts = data.length;
		$("#projects_loader").remove();
		if(numPosts > 0) {
			for (var p in data){
				var project = data[p];
				// var date_obj = new Date(project.enddate);
				// var date_str = m_names[date_obj.getMonth()]+" "+
				// date_obj.getDate()+", "+date_obj.getFullYear()+" at "+
				// date_obj.getHours() + ":" + date_obj.getMinutes() + " GMT";
				//project.enddate = date_str;
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
	
	var modulesArray = new Array();	
	$.get("/modulesinfo", function(modules){
		for(var i = 0; i < modules.length; i++) {
			modulesArray.push(modules[i].name);
		}
		console.log('modules array', modulesArray);

		var substringMatcher = function(strs) {
		  return function findMatches(q, cb) {
		    var matches, substringRegex;
		    matches = [];
		    substrRegex = new RegExp(q, 'i');		 
		    $.each(strs, function(i, str) {
		      if (substrRegex.test(str)) {
		        matches.push({ value: str });
		      }
		    });
		 
		    cb(matches);
		  };
		};

		$('#test .typeahead').typeahead({
		  hint: true,
		  highlight: true,
		  minLength: 1
		},
		{
		  name: 'modulesArray',
		  displayKey: 'value',
		  source: substringMatcher(modulesArray)
		});

	});

});

function post_project(e) {
	$("#log_message").remove();
	var name = $("#name").val();
	var description = $("#description").val();
	var type = $("#type").val();
	var budget_option = $("#budget_option option:selected").text();
	var duration = $("#duration").val();
	var job_type = $("#job_type").val()
	$.get("/postnewproject/" + name + "/" + description + "/" + job_type 
		+ "/" + budget_option + "/" + duration, function(data){
			console.log("hit" + data);
			if(data) {
				$("#log_message_div").after(Templates.post_success);
			} else {
				response = data.errors;
				if (!response) response = data.error;
				else response = response.error.longmsg;
				if (!($(".alert.alert-warning")[0])) {
					var alertDiv = document.createElement("div");
					alertDiv.className ="alert alert-warning";
					var spaceMe = document.createElement("hr");
					document.getElementsByClassName("post_project")[0]
					.appendChild(spaceMe);
					document.getElementsByClassName("post_project")[0].
					appendChild(alertDiv);
				}
				$(".alert.alert-warning").html(response);
			}
		}
	);
}
