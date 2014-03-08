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
			for (var p in posts){
				var project = posts[p];
				var date_obj = new Date(project.enddate);
				var date_str = m_names[date_obj.getMonth()]+" "+
				date_obj.getDay()+", "+date_obj.getFullYear()+" at "+
				date_obj.getHours() + ":" + date_obj.getMinutes() + " GMT";
				project.enddate = date_str;
				$("#posted_projects").append(Templates.posted_projects
											(project));
			}
		}
	});

	// project selecting functionality
	$(document).on("click", ".projects", function(){
		$(".projects").prop("checked", false);
		$(this).prop("checked", true);
		var projectid = $(this).val();
		load_bids_on_post(projectid);
	});

	$(document).on("click", ".btn.btn-default.bid", function(){
		var bid_button = $(this);
		var project_id = bid_button.attr("project_id");
		var user_id = bid_button.attr("user_id");
		$.get("/selectwinner/" + project_id + "/" + user_id, function(resp){
			bid_button.css("display", "none");
		});
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
				// $("#post_project").after("<h2 id='log_message'>Project " +
				// 	"sucessfully posted, see url to view on freelancer: " +
				// 	 url + "</h2>");
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

function load_bids_on_post(project_id){
	$("#bids-on-post").empty();
	$.get("/getprojectbids/" + project_id, function(data){
		var jr = data['json-result'];
		var count = jr.count;
		if (count !== 0){
			var bids = jr.items;
			for (var b in bids){
				var object = {
					"bid": bids[b], 
					"projectid": project_id
				};
				console.log(object);
				$("#bids-on-post").append(Templates.bids_on_posts(object));
				// $("#bids-on-post").append("<li>" + bids[b].descr+" "+
				// 	"($" + bids[b].bid_amount + ") " +
				// 	"<button class='btn btn-default bid'" +
				// 	" project_id = '" + project_id  + "' user_id = '"+
				// 	bids[b].provider_userid + "'' >Pick</button>" + "</li>"
			}
		} else {
			$("#bids-on-post").append("<li>No Bids</li>");
		}
	});
}


// li #{descr} ($#{bid_amount})
//   button(class="btn btn-default bid", 
//project_id=project_id, user_id=proider_userid).
// Pick
