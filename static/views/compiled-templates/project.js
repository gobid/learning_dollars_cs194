var Templates = {
"bids_on_post":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/project/bids_on_post.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,bidder = locals_.bidder,is_owner = locals_.is_owner,projectid = locals_.projectid,bidder_id = locals_.bidder_id;
jade_debug.unshift({ lineno: 0, filename: "jade/project/bids_on_post.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/project/bids_on_post.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/project/bids_on_post.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = bidder) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "jade/project/bids_on_post.jade" });
if ( is_owner)
{
jade_debug.unshift({ lineno: 4, filename: "jade/project/bids_on_post.jade" });
jade_debug.unshift({ lineno: 4, filename: "jade/project/bids_on_post.jade" });
buf.push("<button" + (jade.attr("project_id", projectid, true, false)) + (jade.attr("bidder_id", bidder_id, true, false)) + " class=\"btn btn-default bid pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("Pick ");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 9, filename: "jade/project/bids_on_post.jade" });
jade_debug.unshift({ lineno: 9, filename: "jade/project/bids_on_post.jade" });
buf.push("<div class=\"pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("You didn't post this project.");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "tr\n  td #{bidder}\n    if is_owner\n      button.btn.btn-default.bid.pull-right(\n        project_id=projectid,\n        bidder_id=bidder_id\n      ) Pick \n    else\n      .pull-right You didn't post this project.");
}
},

"no_bids":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/project/no_bids.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/project/no_bids.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/project/no_bids.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/project/no_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("No Bids");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "tr\n  td No Bids");
}
},

"project":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/project/project.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,projectname = locals_.projectname,price = locals_.price,enddate = locals_.enddate,description = locals_.description;
jade_debug.unshift({ lineno: 0, filename: "jade/project/project.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/project/project.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/project/project.jade" });
buf.push("<div class=\"panel panel-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "jade/project/project.jade" });
buf.push("<div class=\"panel-heading\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "jade/project/project.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = projectname) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/project/project.jade" });
buf.push("<div class=\"panel-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "jade/project/project.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "jade/project/project.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "jade/project/project.jade" });
buf.push("<table class=\"table table-striped\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("Budget: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "jade/project/project.jade" });
buf.push("<b class=\"pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = price) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("End date: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "jade/project/project.jade" });
buf.push("<b class=\"pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = enddate) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
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
jade_debug.unshift({ lineno: 15, filename: "jade/project/project.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "jade/project/project.jade" });
buf.push("<table id=\"bids\" class=\"table table-striped\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "jade/project/project.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("Bids");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "jade/project/project.jade" });
buf.push("<tr id=\"bids_loader\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "jade/project/project.jade" });
buf.push("<img src=\"/static/views/img/ajax-loader.gif\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
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
jade_debug.unshift({ lineno: 23, filename: "jade/project/project.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "jade/project/project.jade" });
buf.push("<table class=\"table table-striped\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "jade/project/project.jade" });
buf.push("<h3>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Description");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = description) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
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
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  .panel.panel-default\n    .panel-heading\n      h1 #{projectname}\n    .panel-body\n      .row\n        .col-md-6\n          table.table.table-striped\n            tr\n              td Budget: \n                b.pull-right #{price}\n            tr\n              td End date: \n                b.pull-right #{enddate}\n        .col-md-6\n          table.table.table-striped#bids\n            tr\n              td \n                b Bids\n            tr#bids_loader\n              td\n                img(src = '/static/views/img/ajax-loader.gif')\n      .row\n        table.table.table-striped\n          h3 Description\n            tr\n              td #{description}\n");
}
},

"winner_chosen":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/project/winner_chosen.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/project/winner_chosen.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/project/winner_chosen.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/project/winner_chosen.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("Winner already chosen");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "tr\n  td Winner already chosen");
}
}
};