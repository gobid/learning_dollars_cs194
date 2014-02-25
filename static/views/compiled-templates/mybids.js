var Templates = {
"accept_bid_error":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/mybids/accept_bid_error.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/mybids/accept_bid_error.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/mybids/accept_bid_error.jade" });
buf.push("<h3 id=\"log_message\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("Error, submit again");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "h3(id=\"log_message\") Error, submit again");
}
},

"accept_bid_success":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/mybids/accept_bid_success.jade" }];
try {
var buf = [];
var jade_mixins = {};

jade_debug.unshift({ lineno: 0, filename: "jade/mybids/accept_bid_success.jade" });
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "");
}
},

"all_bids":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/mybids/all_bids.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,projecturl = locals_.projecturl,projectname = locals_.projectname,bidcount = locals_.bidcount,enddate = locals_.enddate,projectid = locals_.projectid;
jade_debug.unshift({ lineno: 0, filename: "jade/mybids/all_bids.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/mybids/all_bids.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/mybids/all_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "jade/mybids/all_bids.jade" });
buf.push("<a" + (jade.attr("href", projecturl, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "jade/mybids/all_bids.jade" });
buf.push("" + (jade.escape((jade.interp = projectname) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/mybids/all_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = bidcount) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "jade/mybids/all_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = enddate) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "jade/mybids/all_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "jade/mybids/all_bids.jade" });
buf.push("<button type=\"Submit\" state=\"1\"" + (jade.attr("projectid", projectid, true, false)) + " class=\"btn btn-default accept_bid\">");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("Accept");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "jade/mybids/all_bids.jade" });
buf.push("<button type=\"Submit\" state=\"0\"" + (jade.attr("projectid", projectid, true, false)) + " class=\"btn btn-default decline_bid\">");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("Decline");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "tr\n  td\n    a(href=projecturl)\n      |#{projectname}\n  td #{bidcount}\n  td #{enddate}\n  td\n    button(type=\"Submit\", state=\"1\", projectid=projectid, class=\"btn btn-default accept_bid\").\n      Accept\n    button(type=\"Submit\", state=\"0\", projectid=projectid, class=\"btn btn-default decline_bid\").\n      Decline\n\n");
}
},

"mybids":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/mybids/mybids.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/mybids/mybids.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/mybids/mybids.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/mybids/mybids.jade" });
buf.push("<div class=\"panel panel-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "jade/mybids/mybids.jade" });
buf.push("<div class=\"panel-heading\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "jade/mybids/mybids.jade" });
buf.push("<h3>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("My Bids");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/mybids/mybids.jade" });
buf.push("<table id=\"all_placed_bids\" class=\"table table-hover\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "jade/mybids/mybids.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "jade/mybids/mybids.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("Project Name");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "jade/mybids/mybids.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("Current Bid Count");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "jade/mybids/mybids.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("End date");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "jade/mybids/mybids.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("Accept/Decline");
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
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  .panel.panel-default\n    .panel-heading\n      h3 My Bids\n    table#all_placed_bids.table.table-hover\n      tr\n        th Project Name\n        th Current Bid Count\n        th End date\n        th Accept/Decline\n");
}
},

"no_bids":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/mybids/no_bids.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/mybids/no_bids.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/mybids/no_bids.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("You have no bids at this time");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "p You have no bids at this time");
}
}
};