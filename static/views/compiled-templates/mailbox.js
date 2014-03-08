var Templates = {
"mailbox":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/mailbox/mailbox.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/mailbox/mailbox.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div class=\"panel panel-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div class=\"panel-heading\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "jade/mailbox/mailbox.jade" });
buf.push("<h3>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Mailbox");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div class=\"panel-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "jade/mailbox/mailbox.jade" });
buf.push("<ul id=\"messageTabs\" class=\"nav nav-tabs\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "jade/mailbox/mailbox.jade" });
buf.push("<li id=\"inboxTab\" class=\"active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "jade/mailbox/mailbox.jade" });
buf.push("<a href=\"#inbox\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("Inbox");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "jade/mailbox/mailbox.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "jade/mailbox/mailbox.jade" });
buf.push("<a id=\"sentTab\" href=\"#sent\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("Sent");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "jade/mailbox/mailbox.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "jade/mailbox/mailbox.jade" });
buf.push("<a href=\"#newMessage\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("New Message");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div class=\"tab-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div id=\"inbox\" class=\"tab-pane fade in active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "jade/mailbox/mailbox.jade" });
buf.push("<table id=\"inboxMessages\" class=\"table table-hover\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "jade/mailbox/mailbox.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "jade/mailbox/mailbox.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("From");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "jade/mailbox/mailbox.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("Message");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "jade/mailbox/mailbox.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("Project Name (ID)");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div id=\"sent\" class=\"tab-pane fade\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "jade/mailbox/mailbox.jade" });
buf.push("<table id=\"sentMessages\" class=\"table table-hover\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "jade/mailbox/mailbox.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: "jade/mailbox/mailbox.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("To");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "jade/mailbox/mailbox.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("Message");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "jade/mailbox/mailbox.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Project Name (ID)");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div id=\"newMessage\" class=\"tab-pane fade\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: "jade/mailbox/mailbox.jade" });
buf.push("<form class=\"newMessageForm\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: "jade/mailbox/mailbox.jade" });
buf.push("<label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("To:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "jade/mailbox/mailbox.jade" });
buf.push("<input id=\"to_user_name\" type=\"text\" placeholder=\"User Name\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: "jade/mailbox/mailbox.jade" });
buf.push("<label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("Project ID Number:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "jade/mailbox/mailbox.jade" });
buf.push("<input id=\"project_id\" type=\"number\" placeholder=\"Project ID #\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: "jade/mailbox/mailbox.jade" });
buf.push("<label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("Message:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "jade/mailbox/mailbox.jade" });
buf.push("<textarea id=\"message_text\" rows=\"3\" placeholder=\"Enter Message Here\" class=\"form-control\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</textarea>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 37, filename: "jade/mailbox/mailbox.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "jade/mailbox/mailbox.jade" });
buf.push("<button id=\"sendBtn\" value=\"Submit\" class=\"btn btn-lg btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("Send");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  .panel.panel-default\n    .panel-heading\n      h3 Mailbox\n    .panel-body\n      ul#messageTabs.nav.nav-tabs\n        li#inboxTab.active\n          a(href='#inbox') Inbox\n        li\n          a#sentTab(href='#sent') Sent\n        li\n          a(href='#newMessage') New Message\n      .tab-content\n        #inbox.tab-pane.fade.in.active\n          table#inboxMessages.table.table-hover\n            tr\n              th From\n              th Message\n              th Project Name (ID)\n        #sent.tab-pane.fade\n          table#sentMessages.table.table-hover\n            tr\n              th To\n              th Message\n              th Project Name (ID)\n        #newMessage.tab-pane.fade\n          form.newMessageForm\n            .form-group\n              label To:\n              input#to_user_name.form-control(type='text', placeholder='User Name')\n            .form-group\n              label Project ID Number:\n              input#project_id.form-control(type='number', placeholder='Project ID #')\n            .form-group\n              label Message:\n              textarea#message_text.form-control(rows='3', placeholder='Enter Message Here')\n            .form-group\n              button#sendBtn.btn.btn-lg.btn-default(value='Submit') Send\n");
}
},

"sending_failure":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/mailbox/sending_failure.jade" }];
try {
var buf = [];
var jade_mixins = {};

jade_debug.unshift({ lineno: 0, filename: "jade/mailbox/sending_failure.jade" });
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "");
}
},

"sending_success":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/mailbox/sending_success.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/mailbox/sending_success.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/mailbox/sending_success.jade" });
buf.push("<div class=\"alert alert-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/mailbox/sending_success.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("Success! ");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "jade/mailbox/sending_success.jade" });
buf.push("Your message was sent.");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".alert.alert-success\n\tstrong Success! \n\t| Your message was sent.");
}
}
};