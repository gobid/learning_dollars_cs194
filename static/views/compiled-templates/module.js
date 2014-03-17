var Templates = {
"bid_failure":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/module/bid_failure.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/module/bid_failure.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/module/bid_failure.jade" });
buf.push("<div id=\"log_message\" class=\"alert alert-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/module/bid_failure.jade" });
buf.push("Bid failure");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div(class=\"alert alert-danger\" id=\"log_message\")\n  | Bid failure");
}
},

"bid_success":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/module/bid_success.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/module/bid_success.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/module/bid_success.jade" });
buf.push("<div id=\"log_message\" class=\"alert alert-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/module/bid_success.jade" });
buf.push("Placed");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div(class=\"alert alert-success\" id=\"log_message\")\n  | Placed");
}
},

"course_failure":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/module/course_failure.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/module/course_failure.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/module/course_failure.jade" });
buf.push("<div id=\"course_message\" class=\"alert alert-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/module/course_failure.jade" });
buf.push("There was an error submitting your course. Please try again.");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div(class=\"alert alert-danger\" id=\"course_message\")\n  | There was an error submitting your course. Please try again.");
}
},

"course_success":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/module/course_success.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/module/course_success.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/module/course_success.jade" });
buf.push("<div id=\"course_message\" class=\"alert alert-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/module/course_success.jade" });
buf.push("Course submitted successfully!");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div(class=\"alert alert-success\" id=\"course_message\")\n  | Course submitted successfully!\n\n");
}
},

"module":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/module/module.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,name = locals_.name,youtube = locals_.youtube,yt_type = locals_.yt_type,jobs = locals_.jobs,courses = locals_.courses,voteStr = locals_.voteStr,category = locals_.category,votedCourses = locals_.votedCourses;
jade_debug.unshift({ lineno: 0, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/module/module.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/module/module.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "jade/module/module.jade" });
buf.push("<div class=\"col-md-8\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "jade/module/module.jade" });
buf.push("<h1 align=\"center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = name) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/module/module.jade" });
buf.push("<div id=\"carousel-ytvids\" data-ride=\"carousel\" data-interval=\"false\" class=\"carousel slide\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "jade/module/module.jade" });
buf.push("<ol class=\"carousel-indicators\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "jade/module/module.jade" });
var count = 0
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "jade/module/module.jade" });
// iterate youtube
;(function(){
  var $$obj = youtube;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var video = $$obj[$index];

jade_debug.unshift({ lineno: 11, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 12, filename: "jade/module/module.jade" });
if ( count == 0)
{
jade_debug.unshift({ lineno: 13, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 13, filename: "jade/module/module.jade" });
buf.push("<li data-target=\"#carousel-ytvids\"" + (jade.attr("data-slide-to", count, true, false)) + " class=\"active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 18, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 18, filename: "jade/module/module.jade" });
buf.push("<li data-target=\"#carousel-ytvids\"" + (jade.attr("data-slide-to", count, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push(" ");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "jade/module/module.jade" });
count = count + 1
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var video = $$obj[$index];

jade_debug.unshift({ lineno: 11, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 12, filename: "jade/module/module.jade" });
if ( count == 0)
{
jade_debug.unshift({ lineno: 13, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 13, filename: "jade/module/module.jade" });
buf.push("<li data-target=\"#carousel-ytvids\"" + (jade.attr("data-slide-to", count, true, false)) + " class=\"active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 18, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 18, filename: "jade/module/module.jade" });
buf.push("<li data-target=\"#carousel-ytvids\"" + (jade.attr("data-slide-to", count, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push(" ");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "jade/module/module.jade" });
count = count + 1
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</ol>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "jade/module/module.jade" });
buf.push("<div class=\"carousel-inner\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "jade/module/module.jade" });
count = 0
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "jade/module/module.jade" });
// iterate youtube
;(function(){
  var $$obj = youtube;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var video = $$obj[$index];

jade_debug.unshift({ lineno: 25, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 26, filename: "jade/module/module.jade" });
if ( count == 0)
{
jade_debug.unshift({ lineno: 27, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 27, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\" class=\"item active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "jade/module/module.jade" });
if ( yt_type == "video")
{
jade_debug.unshift({ lineno: 29, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 29, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/' + (video) + '', true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "jade/module/module.jade" });
if ( yt_type == "playlist")
{
jade_debug.unshift({ lineno: 37, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 37, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/videoseries?list=' + (video) + '', true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 45, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 45, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\" class=\"item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: "jade/module/module.jade" });
if ( yt_type == "video")
{
jade_debug.unshift({ lineno: 47, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 47, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/' + (video) + '', true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
}
else if ( yt_type == "playlist")
{
jade_debug.unshift({ lineno: 55, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 55, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/videoseries?list=' + (video) + '', true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "jade/module/module.jade" });
count = count + 1
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var video = $$obj[$index];

jade_debug.unshift({ lineno: 25, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 26, filename: "jade/module/module.jade" });
if ( count == 0)
{
jade_debug.unshift({ lineno: 27, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 27, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\" class=\"item active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "jade/module/module.jade" });
if ( yt_type == "video")
{
jade_debug.unshift({ lineno: 29, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 29, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/' + (video) + '', true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "jade/module/module.jade" });
if ( yt_type == "playlist")
{
jade_debug.unshift({ lineno: 37, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 37, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/videoseries?list=' + (video) + '', true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 45, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 45, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\" class=\"item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: "jade/module/module.jade" });
if ( yt_type == "video")
{
jade_debug.unshift({ lineno: 47, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 47, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/' + (video) + '', true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
}
else if ( yt_type == "playlist")
{
jade_debug.unshift({ lineno: 55, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 55, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/videoseries?list=' + (video) + '', true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "jade/module/module.jade" });
count = count + 1
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 63, filename: "jade/module/module.jade" });
buf.push("<a href=\"#carousel-ytvids\" data-slide=\"prev\" class=\"carousel-control left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: "jade/module/module.jade" });
buf.push("<span class=\"glyphicon glyphicon-chevron-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 65, filename: "jade/module/module.jade" });
buf.push("<a href=\"#carousel-ytvids\" data-slide=\"next\" class=\"carousel-control right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: "jade/module/module.jade" });
buf.push("<span class=\"glyphicon glyphicon-chevron-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 67, filename: "jade/module/module.jade" });
buf.push("<div class=\"col-md-4\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 68, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: "jade/module/module.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: jade_debug[0].filename });
buf.push("Jobs");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 71, filename: "jade/module/module.jade" });
buf.push("<!-- hardcoded height!! fix -->");
jade_debug.shift();
jade_debug.unshift({ lineno: 71, filename: "jade/module/module.jade" });
buf.push("<div style=\"overflow: scroll; height: 320px;\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 72, filename: "jade/module/module.jade" });
// iterate jobs
;(function(){
  var $$obj = jobs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var job = $$obj[$index];

jade_debug.unshift({ lineno: 72, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 73, filename: "jade/module/module.jade" });
if ( !job.owner)
{
jade_debug.unshift({ lineno: 74, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 74, filename: "jade/module/module.jade" });
buf.push("<div class=\"place-bid\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 75, filename: "jade/module/module.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", "project/" + (job.projectid) + "", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = job.projectname) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.unshift({ lineno: 77, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "jade/module/module.jade" });
buf.push("<div" + (jade.cls(['projectstatus' + (job.projectid) + ''], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 79, filename: "jade/module/module.jade" });
if ( job.alreadyBidOn)
{
jade_debug.unshift({ lineno: 80, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 80, filename: "jade/module/module.jade" });
buf.push("<div class=\"alert alert-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push("Already placed");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 82, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 82, filename: "jade/module/module.jade" });
buf.push("<button" + (jade.attr("id", 'bid_submit' + (job.projectid) + '', true, false)) + " type=\"button\"" + (jade.attr("jobid", '' + (job.projectid) + '', true, false)) + " class=\"btn btn-default btn-small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 86, filename: jade_debug[0].filename });
buf.push("Bid on this project");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var job = $$obj[$index];

jade_debug.unshift({ lineno: 72, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 73, filename: "jade/module/module.jade" });
if ( !job.owner)
{
jade_debug.unshift({ lineno: 74, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 74, filename: "jade/module/module.jade" });
buf.push("<div class=\"place-bid\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 75, filename: "jade/module/module.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", "project/" + (job.projectid) + "", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = job.projectname) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.unshift({ lineno: 77, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "jade/module/module.jade" });
buf.push("<div" + (jade.cls(['projectstatus' + (job.projectid) + ''], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 79, filename: "jade/module/module.jade" });
if ( job.alreadyBidOn)
{
jade_debug.unshift({ lineno: 80, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 80, filename: "jade/module/module.jade" });
buf.push("<div class=\"alert alert-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push("Already placed");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 82, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 82, filename: "jade/module/module.jade" });
buf.push("<button" + (jade.attr("id", 'bid_submit' + (job.projectid) + '', true, false)) + " type=\"button\"" + (jade.attr("jobid", '' + (job.projectid) + '', true, false)) + " class=\"btn btn-default btn-small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 86, filename: jade_debug[0].filename });
buf.push("Bid on this project");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

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
jade_debug.unshift({ lineno: 87, filename: "jade/module/module.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: "jade/module/module.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 89, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 90, filename: "jade/module/module.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 90, filename: jade_debug[0].filename });
buf.push("Courses");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 91, filename: "jade/module/module.jade" });
buf.push("<div id=\"carousel-courses\" data-ride=\"carousel\" data-interval=\"false\" class=\"carousel slide\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 95, filename: "jade/module/module.jade" });
buf.push("<ol class=\"carousel-indicators\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 96, filename: "jade/module/module.jade" });
count = 0
jade_debug.shift();
jade_debug.unshift({ lineno: 97, filename: "jade/module/module.jade" });
// iterate courses
;(function(){
  var $$obj = courses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var course = $$obj[$index];

jade_debug.unshift({ lineno: 97, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 98, filename: "jade/module/module.jade" });
if ( course != "")
{
jade_debug.unshift({ lineno: 99, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 99, filename: "jade/module/module.jade" });
if ( course.Title)
{
jade_debug.unshift({ lineno: 100, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 100, filename: "jade/module/module.jade" });
if ( course.scoreRanking > 0)
{
jade_debug.unshift({ lineno: 101, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 101, filename: "jade/module/module.jade" });
if ( count == 0)
{
jade_debug.unshift({ lineno: 102, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 102, filename: "jade/module/module.jade" });
buf.push("<li data-target=\"#carousel-courses\"" + (jade.attr("data-slide-to", '' + (count) + '', true, false)) + " class=\"active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 107, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 107, filename: "jade/module/module.jade" });
buf.push("<li data-target=\"#carousel-courses\"" + (jade.attr("data-slide-to", '' + (count) + '', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 111, filename: "jade/module/module.jade" });
count = count + 1
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var course = $$obj[$index];

jade_debug.unshift({ lineno: 97, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 98, filename: "jade/module/module.jade" });
if ( course != "")
{
jade_debug.unshift({ lineno: 99, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 99, filename: "jade/module/module.jade" });
if ( course.Title)
{
jade_debug.unshift({ lineno: 100, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 100, filename: "jade/module/module.jade" });
if ( course.scoreRanking > 0)
{
jade_debug.unshift({ lineno: 101, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 101, filename: "jade/module/module.jade" });
if ( count == 0)
{
jade_debug.unshift({ lineno: 102, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 102, filename: "jade/module/module.jade" });
buf.push("<li data-target=\"#carousel-courses\"" + (jade.attr("data-slide-to", '' + (count) + '', true, false)) + " class=\"active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 107, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 107, filename: "jade/module/module.jade" });
buf.push("<li data-target=\"#carousel-courses\"" + (jade.attr("data-slide-to", '' + (count) + '', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 111, filename: "jade/module/module.jade" });
count = count + 1
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</ol>");
jade_debug.shift();
jade_debug.unshift({ lineno: 112, filename: "jade/module/module.jade" });
count = 0
jade_debug.shift();
jade_debug.unshift({ lineno: 113, filename: "jade/module/module.jade" });
buf.push("<div class=\"carousel-inner\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 114, filename: "jade/module/module.jade" });
// iterate courses
;(function(){
  var $$obj = courses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var course = $$obj[$index];

jade_debug.unshift({ lineno: 114, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 115, filename: "jade/module/module.jade" });
if ( course != "")
{
jade_debug.unshift({ lineno: 116, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 116, filename: "jade/module/module.jade" });
if ( course.Title)
{
jade_debug.unshift({ lineno: 117, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 117, filename: "jade/module/module.jade" });
if ( course.scoreRanking > 0)
{
jade_debug.unshift({ lineno: 118, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 118, filename: "jade/module/module.jade" });
if ( count == 0)
{
jade_debug.unshift({ lineno: 119, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 119, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\" class=\"item active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 120, filename: "jade/module/module.jade" });
buf.push("<div class=\"courseinfo\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 121, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", course.CourseURL, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 121, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = course.Title) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 122, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 123, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.Institution) == null ? '' : jade.interp)) + " (" + (jade.escape((jade.interp = course.TeachingDate) == null ? '' : jade.interp)) + ")");
jade_debug.shift();
jade_debug.unshift({ lineno: 124, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 125, filename: "jade/module/module.jade" });
buf.push("Instructors: " + (jade.escape((jade.interp = course.Instructors) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 126, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 127, filename: "jade/module/module.jade" });
buf.push("Description: " + (jade.escape((jade.interp = course.Description) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 128, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 129, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", course.DownloadPageLink, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 129, filename: jade_debug[0].filename });
buf.push("Course Materials");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 130, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 131, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 132, filename: "jade/module/module.jade" });
buf.push("<div" + (jade.attr("id", "" + (count) + "", true, false)) + " class=\"coursescore\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 133, filename: "jade/module/module.jade" });
voteStr = category + "+" + course.Title
jade_debug.shift();
jade_debug.unshift({ lineno: 134, filename: "jade/module/module.jade" });
if ( course.scoreRanking == 1)
{
jade_debug.unshift({ lineno: 135, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 135, filename: "jade/module/module.jade" });
if ( voteStr in votedCourses)
{
jade_debug.unshift({ lineno: 136, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 136, filename: "jade/module/module.jade" });
if ( votedCourses[voteStr] == "Y")
{
jade_debug.unshift({ lineno: 137, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 137, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-success\">");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 139, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 139, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-danger\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 141, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 141, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 142, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.scoreRanking) == null ? '' : jade.interp)) + "</span> person found this course helpful.");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 144, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 144, filename: "jade/module/module.jade" });
if ( voteStr in votedCourses)
{
jade_debug.unshift({ lineno: 145, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 145, filename: "jade/module/module.jade" });
if ( votedCourses[voteStr] == "Y")
{
jade_debug.unshift({ lineno: 146, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 146, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-success\">");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 148, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 148, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-danger\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 150, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 150, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 151, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.scoreRanking) == null ? '' : jade.interp)) + "</span> people found this course helpful.");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 152, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 153, filename: "jade/module/module.jade" });
buf.push("<button id=\"helpful\"" + (jade.attr("courseTitle", '' + (course.Title) + '', true, false)) + (jade.attr("moduleID", '' + (category) + '', true, false)) + (jade.attr("count", "" + (count) + "", true, false)) + " class=\"btn btn-default btn-lg glyphicon glyphicon-thumbs-up\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 158, filename: "jade/module/module.jade" });
buf.push("&nbsp; &nbsp; &nbsp;");
jade_debug.shift();
jade_debug.unshift({ lineno: 159, filename: "jade/module/module.jade" });
buf.push("<button id=\"nothelpful\"" + (jade.attr("courseTitle", '' + (course.Title) + '', true, false)) + (jade.attr("moduleID", '' + (category) + '', true, false)) + (jade.attr("count", "" + (count) + "", true, false)) + " class=\"btn btn-default btn-lg glyphicon glyphicon-thumbs-down\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 165, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 165, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\" class=\"item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 166, filename: "jade/module/module.jade" });
buf.push("<div class=\"courseinfo\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 167, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", course.CourseURL, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 167, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = course.Title) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 168, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 169, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.Institution) == null ? '' : jade.interp)) + " (" + (jade.escape((jade.interp = course.TeachingDate) == null ? '' : jade.interp)) + ")");
jade_debug.shift();
jade_debug.unshift({ lineno: 170, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 171, filename: "jade/module/module.jade" });
buf.push("Instructors: " + (jade.escape((jade.interp = course.Instructors) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 172, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 173, filename: "jade/module/module.jade" });
buf.push("Description: " + (jade.escape((jade.interp = course.Description) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 174, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 175, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", course.DownloadPageLink, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 175, filename: jade_debug[0].filename });
buf.push("Course Materials");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 176, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 177, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 178, filename: "jade/module/module.jade" });
buf.push("<div" + (jade.attr("id", "" + (count) + "", true, false)) + " class=\"coursescore\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 179, filename: "jade/module/module.jade" });
voteStr = category + "+" + course.Title
jade_debug.shift();
jade_debug.unshift({ lineno: 180, filename: "jade/module/module.jade" });
if ( course.scoreRanking == 1)
{
jade_debug.unshift({ lineno: 181, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 181, filename: "jade/module/module.jade" });
if ( voteStr in votedCourses)
{
jade_debug.unshift({ lineno: 182, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 182, filename: "jade/module/module.jade" });
if ( votedCourses[voteStr] == "Y")
{
jade_debug.unshift({ lineno: 183, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 183, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-success\">");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 185, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 185, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-danger\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 187, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 187, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 188, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.scoreRanking) == null ? '' : jade.interp)) + "</span> person found this course helpful.");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 190, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 190, filename: "jade/module/module.jade" });
if ( voteStr in votedCourses)
{
jade_debug.unshift({ lineno: 191, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 191, filename: "jade/module/module.jade" });
if ( votedCourses[voteStr] == "Y")
{
jade_debug.unshift({ lineno: 192, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 192, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-success\">");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 194, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 194, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-danger\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 196, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 196, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 197, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.scoreRanking) == null ? '' : jade.interp)) + "</span> people found this course helpful.");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 198, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 199, filename: "jade/module/module.jade" });
buf.push("<button id=\"helpful\"" + (jade.attr("courseTitle", '' + (course.Title) + '', true, false)) + (jade.attr("moduleID", '' + (category) + '', true, false)) + (jade.attr("count", "" + (count) + "", true, false)) + " class=\"btn btn-default btn-lg glyphicon glyphicon-thumbs-up\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 203, filename: "jade/module/module.jade" });
buf.push("&nbsp; &nbsp; &nbsp;");
jade_debug.shift();
jade_debug.unshift({ lineno: 204, filename: "jade/module/module.jade" });
buf.push("<button id=\"nothelpful\"" + (jade.attr("courseTitle", '' + (course.Title) + '', true, false)) + (jade.attr("moduleID", '' + (category) + '', true, false)) + (jade.attr("count", "" + (count) + "", true, false)) + " class=\"btn btn-default btn-lg glyphicon glyphicon-thumbs-down\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 209, filename: "jade/module/module.jade" });
count = count + 1 
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var course = $$obj[$index];

jade_debug.unshift({ lineno: 114, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 115, filename: "jade/module/module.jade" });
if ( course != "")
{
jade_debug.unshift({ lineno: 116, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 116, filename: "jade/module/module.jade" });
if ( course.Title)
{
jade_debug.unshift({ lineno: 117, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 117, filename: "jade/module/module.jade" });
if ( course.scoreRanking > 0)
{
jade_debug.unshift({ lineno: 118, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 118, filename: "jade/module/module.jade" });
if ( count == 0)
{
jade_debug.unshift({ lineno: 119, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 119, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\" class=\"item active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 120, filename: "jade/module/module.jade" });
buf.push("<div class=\"courseinfo\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 121, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", course.CourseURL, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 121, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = course.Title) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 122, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 123, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.Institution) == null ? '' : jade.interp)) + " (" + (jade.escape((jade.interp = course.TeachingDate) == null ? '' : jade.interp)) + ")");
jade_debug.shift();
jade_debug.unshift({ lineno: 124, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 125, filename: "jade/module/module.jade" });
buf.push("Instructors: " + (jade.escape((jade.interp = course.Instructors) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 126, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 127, filename: "jade/module/module.jade" });
buf.push("Description: " + (jade.escape((jade.interp = course.Description) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 128, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 129, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", course.DownloadPageLink, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 129, filename: jade_debug[0].filename });
buf.push("Course Materials");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 130, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 131, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 132, filename: "jade/module/module.jade" });
buf.push("<div" + (jade.attr("id", "" + (count) + "", true, false)) + " class=\"coursescore\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 133, filename: "jade/module/module.jade" });
voteStr = category + "+" + course.Title
jade_debug.shift();
jade_debug.unshift({ lineno: 134, filename: "jade/module/module.jade" });
if ( course.scoreRanking == 1)
{
jade_debug.unshift({ lineno: 135, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 135, filename: "jade/module/module.jade" });
if ( voteStr in votedCourses)
{
jade_debug.unshift({ lineno: 136, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 136, filename: "jade/module/module.jade" });
if ( votedCourses[voteStr] == "Y")
{
jade_debug.unshift({ lineno: 137, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 137, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-success\">");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 139, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 139, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-danger\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 141, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 141, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 142, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.scoreRanking) == null ? '' : jade.interp)) + "</span> person found this course helpful.");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 144, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 144, filename: "jade/module/module.jade" });
if ( voteStr in votedCourses)
{
jade_debug.unshift({ lineno: 145, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 145, filename: "jade/module/module.jade" });
if ( votedCourses[voteStr] == "Y")
{
jade_debug.unshift({ lineno: 146, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 146, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-success\">");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 148, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 148, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-danger\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 150, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 150, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 151, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.scoreRanking) == null ? '' : jade.interp)) + "</span> people found this course helpful.");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 152, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 153, filename: "jade/module/module.jade" });
buf.push("<button id=\"helpful\"" + (jade.attr("courseTitle", '' + (course.Title) + '', true, false)) + (jade.attr("moduleID", '' + (category) + '', true, false)) + (jade.attr("count", "" + (count) + "", true, false)) + " class=\"btn btn-default btn-lg glyphicon glyphicon-thumbs-up\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 158, filename: "jade/module/module.jade" });
buf.push("&nbsp; &nbsp; &nbsp;");
jade_debug.shift();
jade_debug.unshift({ lineno: 159, filename: "jade/module/module.jade" });
buf.push("<button id=\"nothelpful\"" + (jade.attr("courseTitle", '' + (course.Title) + '', true, false)) + (jade.attr("moduleID", '' + (category) + '', true, false)) + (jade.attr("count", "" + (count) + "", true, false)) + " class=\"btn btn-default btn-lg glyphicon glyphicon-thumbs-down\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 165, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 165, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\" class=\"item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 166, filename: "jade/module/module.jade" });
buf.push("<div class=\"courseinfo\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 167, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", course.CourseURL, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 167, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = course.Title) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 168, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 169, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.Institution) == null ? '' : jade.interp)) + " (" + (jade.escape((jade.interp = course.TeachingDate) == null ? '' : jade.interp)) + ")");
jade_debug.shift();
jade_debug.unshift({ lineno: 170, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 171, filename: "jade/module/module.jade" });
buf.push("Instructors: " + (jade.escape((jade.interp = course.Instructors) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 172, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 173, filename: "jade/module/module.jade" });
buf.push("Description: " + (jade.escape((jade.interp = course.Description) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 174, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 175, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", course.DownloadPageLink, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 175, filename: jade_debug[0].filename });
buf.push("Course Materials");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 176, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 177, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 178, filename: "jade/module/module.jade" });
buf.push("<div" + (jade.attr("id", "" + (count) + "", true, false)) + " class=\"coursescore\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 179, filename: "jade/module/module.jade" });
voteStr = category + "+" + course.Title
jade_debug.shift();
jade_debug.unshift({ lineno: 180, filename: "jade/module/module.jade" });
if ( course.scoreRanking == 1)
{
jade_debug.unshift({ lineno: 181, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 181, filename: "jade/module/module.jade" });
if ( voteStr in votedCourses)
{
jade_debug.unshift({ lineno: 182, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 182, filename: "jade/module/module.jade" });
if ( votedCourses[voteStr] == "Y")
{
jade_debug.unshift({ lineno: 183, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 183, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-success\">");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 185, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 185, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-danger\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 187, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 187, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 188, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.scoreRanking) == null ? '' : jade.interp)) + "</span> person found this course helpful.");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 190, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 190, filename: "jade/module/module.jade" });
if ( voteStr in votedCourses)
{
jade_debug.unshift({ lineno: 191, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 191, filename: "jade/module/module.jade" });
if ( votedCourses[voteStr] == "Y")
{
jade_debug.unshift({ lineno: 192, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 192, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-success\">");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 194, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 194, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\" class=\"text-danger\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 196, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 196, filename: "jade/module/module.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\">");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 197, filename: "jade/module/module.jade" });
buf.push("" + (jade.escape((jade.interp = course.scoreRanking) == null ? '' : jade.interp)) + "</span> people found this course helpful.");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 198, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 199, filename: "jade/module/module.jade" });
buf.push("<button id=\"helpful\"" + (jade.attr("courseTitle", '' + (course.Title) + '', true, false)) + (jade.attr("moduleID", '' + (category) + '', true, false)) + (jade.attr("count", "" + (count) + "", true, false)) + " class=\"btn btn-default btn-lg glyphicon glyphicon-thumbs-up\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 203, filename: "jade/module/module.jade" });
buf.push("&nbsp; &nbsp; &nbsp;");
jade_debug.shift();
jade_debug.unshift({ lineno: 204, filename: "jade/module/module.jade" });
buf.push("<button id=\"nothelpful\"" + (jade.attr("courseTitle", '' + (course.Title) + '', true, false)) + (jade.attr("moduleID", '' + (category) + '', true, false)) + (jade.attr("count", "" + (count) + "", true, false)) + " class=\"btn btn-default btn-lg glyphicon glyphicon-thumbs-down\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 209, filename: "jade/module/module.jade" });
count = count + 1 
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 210, filename: "jade/module/module.jade" });
buf.push("<a id=\"coursesleft\" href=\"#carousel-courses\" data-slide=\"prev\" class=\"carousel-control left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 211, filename: "jade/module/module.jade" });
buf.push("<span class=\"glyphicon glyphicon-chevron-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 212, filename: "jade/module/module.jade" });
buf.push("<a id=\"coursesright\" href=\"#carousel-courses\" data-slide=\"next\" class=\"carousel-control right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 213, filename: "jade/module/module.jade" });
buf.push("<span class=\"glyphicon glyphicon-chevron-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
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
jade_debug.unshift({ lineno: 214, filename: "jade/module/module.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 215, filename: "jade/module/module.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 216, filename: "jade/module/module.jade" });
buf.push("<div align=\"center\" id=\"suggestionText\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 217, filename: "jade/module/module.jade" });
buf.push("None of these courses helpful? ");
jade_debug.shift();
jade_debug.unshift({ lineno: 218, filename: "jade/module/module.jade" });
buf.push("<button data-toggle=\"modal\" data-target=\"#suggestCourseDiv\" class=\"btn btn-small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 218, filename: jade_debug[0].filename });
buf.push("Suggest a course!");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 219, filename: "jade/module/module.jade" });
buf.push("<div id=\"suggestCourseDiv\" tabindex=\"-1\" aria-labelledby=\"suggestLabel\" aria-hidden=\"true\" class=\"modal bs-example-modal-sm\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 220, filename: "jade/module/module.jade" });
buf.push("<div class=\"modal-dialog modal-sm\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 221, filename: "jade/module/module.jade" });
buf.push("<div class=\"modal-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 222, filename: "jade/module/module.jade" });
buf.push("<div class=\"modal-header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 223, filename: "jade/module/module.jade" });
buf.push("<h3 id=\"suggestLabel\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 224, filename: "jade/module/module.jade" });
buf.push("Suggest A Course");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 225, filename: "jade/module/module.jade" });
buf.push("<div class=\"modal-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 226, filename: "jade/module/module.jade" });
buf.push("<form id=\"suggestCourseForm\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 227, filename: "jade/module/module.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 228, filename: "jade/module/module.jade" });
buf.push("<input id=\"suggestURL\" type=\"text\" name=\"suggestURL\" placeholder=\"Course URL\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 229, filename: "jade/module/module.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 230, filename: "jade/module/module.jade" });
buf.push("<input id=\"suggestTitle\" type=\"text\" name=\"suggestTitle\" placeholder=\"Title\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 231, filename: "jade/module/module.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 232, filename: "jade/module/module.jade" });
buf.push("<input id=\"suggestInstitution\" type=\"text\" name=\"suggestInstitution\" placeholder=\"Institution\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 233, filename: "jade/module/module.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 234, filename: "jade/module/module.jade" });
buf.push("<input id=\"suggestTeachDate\" type=\"text\" name=\"suggestTeachDate\" placeholder=\"Teaching Date\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 235, filename: "jade/module/module.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 236, filename: "jade/module/module.jade" });
buf.push("<input id=\"suggestInstructors\" type=\"text\" name=\"suggestInstructors\" placeholder=\"Instructors\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 237, filename: "jade/module/module.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 238, filename: "jade/module/module.jade" });
buf.push("<textarea id=\"suggestDesc\" rows=\"3\" name=\"suggestDesc\" placeholder=\"Description\" class=\"form-control\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</textarea>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 239, filename: "jade/module/module.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 240, filename: "jade/module/module.jade" });
buf.push("<input id=\"suggestMaterials\" type=\"text\" name=\"suggestMaterials\" placeholder=\"Course Materials Link\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 241, filename: "jade/module/module.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 242, filename: "jade/module/module.jade" });
buf.push("<button id=\"submitSuggestion\" type=\"button\" value=\"Submit\" moduleID=\"key.id()\" data-dismiss=\"modal\" class=\"btn btn-default btn-lg\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 242, filename: jade_debug[0].filename });
buf.push("Submit");
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  .row\n    .col-md-8\n      h1(align='center') #{name}\n      #carousel-ytvids.carousel.slide(\n        data-ride='carousel', \n        data-interval='false'\n      )\n        ol.carousel-indicators\n          - var count = 0\n          for video in youtube\n            if count == 0\n              li.active(\n                data-target='#carousel-ytvids', \n                data-slide-to=count\n              )\n            else\n              li(\n                data-target='#carousel-ytvids', \n                data-slide-to=count\n              )  \n            - count = count + 1\n        .carousel-inner\n          - count = 0\n          for video in youtube\n            if count == 0\n              .item.active(align='center')\n                if yt_type == \"video\"\n                  iframe(\n                    width='560', \n                    height='315', \n                    src='//www.youtube.com/embed/#{video}', \n                    frameborder='0', \n                    allowfullscreen='allowfullscreen'\n                  )\n                if yt_type == \"playlist\"\n                  iframe(\n                    width='560', \n                    height='315', \n                    src='//www.youtube.com/embed/videoseries?list=#{video}', \n                    frameborder='0', \n                    allowfullscreen='allowfullscreen'\n                  )\n            else\n              .item(align='center')\n                if yt_type == \"video\"\n                  iframe(\n                    width='560', \n                    height='315', \n                    src='//www.youtube.com/embed/#{video}', \n                    frameborder='0', \n                    allowfullscreen='allowfullscreen'\n                  )\n                else if yt_type == \"playlist\"\n                  iframe(\n                    width='560', \n                    height='315', \n                    src='//www.youtube.com/embed/videoseries?list=#{video}', \n                    frameborder='0', \n                    allowfullscreen='allowfullscreen'\n                  )\n            - count = count + 1\n        a.carousel-control.left(href='#carousel-ytvids', data-slide='prev')\n          span.glyphicon.glyphicon-chevron-left\n        a.carousel-control.right(href='#carousel-ytvids', data-slide='next')\n          span.glyphicon.glyphicon-chevron-right\n    .col-md-4\n      div(align='center')\n        h2 Jobs\n      // hardcoded height!! fix \n      div(style='overflow: scroll; height: 320px;')\n        for job in jobs\n          if !job.owner\n            .place-bid\n              b\n                a(target='_blank', href=\"project/#{job.projectid}\") #{job.projectname}\n              br\n              div(class='projectstatus#{job.projectid}')\n                if job.alreadyBidOn\n                  div.alert.alert-success Already placed\n                else\n                  button.btn.btn-default.btn-small(\n                    id = 'bid_submit#{job.projectid}',\n                    type='button', \n                    jobid='#{job.projectid}'\n                  ) Bid on this project\n  .row\n    .col-md-12\n      div(align='center')\n        h2 Courses\n      #carousel-courses.carousel.slide(\n        data-ride='carousel', \n        data-interval='false'\n      )\n        ol.carousel-indicators\n          - count = 0\n          for course in courses\n            if course != \"\"\n              if course.Title\n                if course.scoreRanking > 0\n                  if count == 0\n                    li.active(\n                      data-target='#carousel-courses', \n                      data-slide-to='#{count}'\n                    )\n                  else\n                    li(\n                      data-target='#carousel-courses', \n                      data-slide-to='#{count}'\n                    )\n                  - count = count + 1\n        - count = 0\n        .carousel-inner\n          for course in courses\n            if course != \"\"\n              if course.Title\n                if course.scoreRanking > 0\n                  if count == 0\n                    .item.active(align='center')\n                      .courseinfo\n                        a(target='_blank', href=course.CourseURL) #{course.Title}\n                        br\n                        | #{course.Institution} (#{course.TeachingDate})\n                        br\n                        | Instructors: #{course.Instructors}\n                        br\n                        | Description: #{course.Description}\n                        br\n                        a(target='_blank', href=course.DownloadPageLink) Course Materials\n                        br\n                      br\n                      div(class=\"coursescore\", id=\"#{count}\")\n                        - voteStr = category + \"+\" + course.Title\n                        if course.scoreRanking == 1\n                          if voteStr in votedCourses\n                            if votedCourses[voteStr] == \"Y\"\n                              | <span id=\"rank#{count}\" class=\"text-success\">\n                            else\n                              | <span id=\"rank#{count}\" class=\"text-danger\">\n                          else\n                            | <span id=\"rank#{count}\">\n                          | #{course.scoreRanking}</span> person found this course helpful.\n                        else \n                          if voteStr in votedCourses\n                            if votedCourses[voteStr] == \"Y\"\n                              | <span id=\"rank#{count}\" class=\"text-success\">\n                            else\n                              | <span id=\"rank#{count}\" class=\"text-danger\">\n                          else\n                            | <span id=\"rank#{count}\">\n                          | #{course.scoreRanking}</span> people found this course helpful.\n                      br\n                      button#helpful.btn.btn-default.btn-lg.glyphicon.glyphicon-thumbs-up(\n                        courseTitle='#{course.Title}',\n                        moduleID='#{category}',\n                        count=\"#{count}\"\n                      )\n                      | &nbsp; &nbsp; &nbsp;\n                      button#nothelpful.btn.btn-default.btn-lg.glyphicon.glyphicon-thumbs-down(\n                        courseTitle='#{course.Title}',\n                        moduleID='#{category}',\n                        count=\"#{count}\"\n                      )\n                  else\n                    .item(align='center')\n                      .courseinfo\n                        a(target='_blank', href=course.CourseURL) #{course.Title}\n                        br\n                        | #{course.Institution} (#{course.TeachingDate})\n                        br\n                        | Instructors: #{course.Instructors}\n                        br\n                        | Description: #{course.Description}\n                        br\n                        a(target='_blank', href=course.DownloadPageLink) Course Materials\n                        br\n                      br \n                      div(class=\"coursescore\", id=\"#{count}\")\n                        - voteStr = category + \"+\" + course.Title\n                        if course.scoreRanking == 1\n                          if voteStr in votedCourses\n                            if votedCourses[voteStr] == \"Y\"\n                              | <span id=\"rank#{count}\" class=\"text-success\">\n                            else\n                              | <span id=\"rank#{count}\" class=\"text-danger\">\n                          else\n                            | <span id=\"rank#{count}\">\n                          | #{course.scoreRanking}</span> person found this course helpful.\n                        else \n                          if voteStr in votedCourses\n                            if votedCourses[voteStr] == \"Y\"\n                              | <span id=\"rank#{count}\" class=\"text-success\">\n                            else\n                              | <span id=\"rank#{count}\" class=\"text-danger\">\n                          else\n                            | <span id=\"rank#{count}\">\n                          | #{course.scoreRanking}</span> people found this course helpful.\n                      br\n                      button#helpful.btn.btn-default.btn-lg.glyphicon.glyphicon-thumbs-up(\n                        courseTitle='#{course.Title}',\n                        moduleID='#{category}',\n                        count=\"#{count}\"                      )\n                      | &nbsp; &nbsp; &nbsp;\n                      button#nothelpful.btn.btn-default.btn-lg.glyphicon.glyphicon-thumbs-down(\n                        courseTitle='#{course.Title}',\n                        moduleID='#{category}',\n                        count=\"#{count}\"\n                      )\n                  - count = count + 1 \n        a#coursesleft.carousel-control.left(href='#carousel-courses', data-slide='prev')\n          span.glyphicon.glyphicon-chevron-left\n        a#coursesright.carousel-control.right(href='#carousel-courses', data-slide='next')\n          span.glyphicon.glyphicon-chevron-right\n  .row\n    .col-md-12\n      div(align='center', id=\"suggestionText\")\n        | None of these courses helpful? \n        button.btn.btn-small(data-toggle=\"modal\", data-target=\"#suggestCourseDiv\") Suggest a course!\n        div(class=\"modal bs-example-modal-sm\", id=\"suggestCourseDiv\", tabindex=\"-1\", aria-labelledby=\"suggestLabel\", aria-hidden=\"true\")\n          .modal-dialog.modal-sm\n            .modal-content\n              .modal-header\n                h3#suggestLabel\n                  | Suggest A Course\n              .modal-body\n                form#suggestCourseForm\n                  .form-group\n                    input#suggestURL.form-control(type=\"text\", name=\"suggestURL\", placeholder=\"Course URL\")\n                  .form-group\n                    input#suggestTitle.form-control(type=\"text\", name=\"suggestTitle\", placeholder=\"Title\")\n                  .form-group\n                    input#suggestInstitution.form-control(type=\"text\", name=\"suggestInstitution\", placeholder=\"Institution\")\n                  .form-group\n                    input#suggestTeachDate.form-control(type=\"text\", name=\"suggestTeachDate\", placeholder=\"Teaching Date\")\n                  .form-group\n                    input#suggestInstructors.form-control(type=\"text\", name=\"suggestInstructors\", placeholder=\"Instructors\")\n                  .form-group\n                    textarea#suggestDesc.form-control(rows=\"3\", name=\"suggestDesc\", placeholder=\"Description\")\n                  .form-group\n                    input#suggestMaterials.form-control(type=\"text\", name=\"suggestMaterials\", placeholder=\"Course Materials Link\")      \n                  .form-group\n                    button#submitSuggestion.btn.btn-default.btn-lg(type=\"button\", value=\"Submit\", moduleID='key.id()', data-dismiss=\"modal\") Submit");
}
},

"post_voting_multiple":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/module/post_voting_multiple.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),count = locals_.count,newScore = locals_.newScore;
jade_debug.unshift({ lineno: 0, filename: "jade/module/post_voting_multiple.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/module/post_voting_multiple.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\">" + (jade.escape((jade.interp = newScore) == null ? '' : jade.interp)) + "</span> people found this course helpful.");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "| <span id=\"rank#{count}\">#{newScore}</span> people found this course helpful.");
}
},

"post_voting_single":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/module/post_voting_single.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),count = locals_.count,newScore = locals_.newScore;
jade_debug.unshift({ lineno: 0, filename: "jade/module/post_voting_single.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/module/post_voting_single.jade" });
buf.push("<span id=\"rank" + (jade.escape((jade.interp = count) == null ? '' : jade.interp)) + "\">" + (jade.escape((jade.interp = newScore) == null ? '' : jade.interp)) + "</span> person found this course helpful.");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "| <span id=\"rank#{count}\">#{newScore}</span> person found this course helpful.");
}
},

"vote_failure":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/module/vote_failure.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/module/vote_failure.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/module/vote_failure.jade" });
buf.push("<div id=\"vote_message\" class=\"alert alert-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/module/vote_failure.jade" });
buf.push("You have already voted in this manner.");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div(class=\"alert alert-danger\" id=\"vote_message\")\n  | You have already voted in this manner.\n");
}
},

"vote_general_failure":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/module/vote_general_failure.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/module/vote_general_failure.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/module/vote_general_failure.jade" });
buf.push("<div id=\"vote_message\" class=\"alert alert-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/module/vote_general_failure.jade" });
buf.push("Something went wrong when voting. Please try again.");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div(class=\"alert alert-danger\" id=\"vote_message\")\n  | Something went wrong when voting. Please try again.\n");
}
}
};