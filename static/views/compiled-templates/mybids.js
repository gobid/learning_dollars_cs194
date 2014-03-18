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

"accept_bid_good":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/mybids/accept_bid_good.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/mybids/accept_bid_good.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/mybids/accept_bid_good.jade" });
buf.push("<h2 id=\"log_message\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("Bid acceptance/decline submitted successfully.");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "h2(id=\"log_message\") Bid acceptance/decline submitted successfully.");
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
var locals_ = (locals || {}),undefined = locals_.undefined,projectid = locals_.projectid,projectname = locals_.projectname,enddate = locals_.enddate,additionalstatus = locals_.additionalstatus,winner_email = locals_.winner_email;
jade_debug.unshift({ lineno: 0, filename: "jade/mybids/all_bids.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/mybids/all_bids.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/mybids/all_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "jade/mybids/all_bids.jade" });
buf.push("<a" + (jade.attr("href", "project/" + (projectid) + "", true, false)) + ">");
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
buf.push("" + (jade.escape((jade.interp = enddate) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "jade/mybids/all_bids.jade" });
if ( additionalstatus == 'open')
{
jade_debug.unshift({ lineno: 7, filename: "jade/mybids/all_bids.jade" });
jade_debug.unshift({ lineno: 7, filename: "jade/mybids/all_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = additionalstatus) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 9, filename: "jade/mybids/all_bids.jade" });
jade_debug.unshift({ lineno: 9, filename: "jade/mybids/all_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("Winner: " + (jade.escape((jade.interp = winner_email) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "tr\n  td\n    a(href=\"project/#{projectid}\")\n      |#{projectname}\n  td #{enddate}\n  if additionalstatus == 'open'\n    td #{additionalstatus}\n  else\n    td Winner: #{winner_email}\n");
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
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("My Bids");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/mybids/mybids.jade" });
buf.push("<table id=\"all_placed_bids\" class=\"table table-striped\">");
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
buf.push("End date");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "jade/mybids/mybids.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("Status");
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  .panel.panel-default\n    .panel-heading\n      h1 My Bids\n    table#all_placed_bids.table.table-striped\n      tr\n        th Project Name\n        th End date\n        th Status");
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
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/mybids/no_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("No bids made yet.");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "jade/mybids/no_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "jade/mybids/no_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "tr\n  td No bids made yet.\n  td\n  td");
}
}
};