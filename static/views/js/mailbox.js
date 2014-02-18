"use strict";

$(document).ready(function() {

	$("#messageTabs a").click(function (e) {
		e.preventDefault();
		$(this).tab("show");
	});

	$("#inboxTab").click(getMessages("inboxMessages"));

	$("#sentTab").click(getMessages("sentMessages"));

	$("#sendBtn").click(function (e) {
		e.preventDefault();
		var projectId = $("#project_id").val();
		var messageText = $("#message_text").val();
		var toUserName = $("#to_user_name").val();
		var url = "/sendMessage/" + projectId + "/" + messageText +
			"/" + toUserName;
		$.get(url, function(data) {
			var result = data["json-result"];
			if(result){
				$("#newMessage").append("<h4 class=\"response\">SEND!</h4>");
				setTimeout(function(){
					$("#newMessage").find("form")[0].reset();
				}, 3000);
			} else {
				result = data.errors;
				var error_txt = result.error.longmsg;
				$("#newMessage").append("<h4 class=\"response\">" +
					error_txt.toUpperCase() + "</h4>");
			}
			setTimeout(function(){
				$(".response").fadeOut();
			}, 3000);
		});
	});
});

// Helper Functions
function getMessages(url) {
	$("#"+url).append("<h4 class=\"loading\">Loading...</h4>");
	$.get("/"+url, function(data) {
		var numMessages = data["json-result"].count;
		if (numMessages !== 0) {
			var messages = data["json-result"].items;
			for (var m in messages) {
				var project_id = messages[m].projectid;
				var text = messages[m].text;
				var project_name = messages[m].projectname;
				var project_url = messages[m].projecturl;
				var username = "";
				if (url == "inboxMessages")
					username = messages[m].fromusername;
				else
					username = messages[m].tousername;
				$("#"+url).append("<tr><td>" + username + "</td><td>" + text +
					"</td><td><a href=\"" + project_url + "\">" +
					project_name + " (" + project_id + ")</a></td></tr>"
				);
			}
			$(".loading").fadeOut();
		}
	});
}