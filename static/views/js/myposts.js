$(document).ready(function() {

	// initialize page
	$("body").append(Templates.myposts());

	$.get("/postsinfo", function(data){
		var numPosts = data["json-result"].count;
		var m_names = new Array("January", "February", "March",
			"April", "May", "June", "July", "August", "September",
			"October", "November", "December");
		if(numPosts > 0) {
			var posts = data["json-result"].items;
			$("#projects_loader").remove();
			for (var p in posts){
				var project = posts[p];
				var date_obj = new Date(project.enddate);
				var date_str = m_names[date_obj.getMonth()]+" "+
				date_obj.getDate()+", "+date_obj.getFullYear()+" at "+
				date_obj.getHours() + ":" + date_obj.getMinutes() + " GMT";
				project.enddate = date_str;
				$("#posted_projects").append(
					Templates.posted_projects(project)
				);
			}
		}
	});

	$("#post_project").click(post_project);

});

function post_project(e) {
	$("#log_message").remove();
	var name = $("#name").val();
	var description = $("#description").val();
	var type = $("#type").val();
	var budget_option = $("#budget_option option:selected").attr("value");
	var duration = $("#duration").val();
	$.get("/postnewproject/" + name + "/" + description + "/" + type + "/" + 
		budget_option + "/" + duration, function(data){
			var response = data["json-result"];
			if(response) {
				$("#post_project").after(Templates.post_success(response));
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
