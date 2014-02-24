var Templates = {
"module":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/module/module.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,name = locals_.name,yt_type = locals_.yt_type,youtube = locals_.youtube,jobs = locals_.jobs,courses = locals_.courses;
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
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = name) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/module/module.jade" });
if ( (yt_type == "video"))
{
jade_debug.unshift({ lineno: 6, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 6, filename: "jade/module/module.jade" });
// iterate youtube
;(function(){
  var $$obj = youtube;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var video = $$obj[$index];

jade_debug.unshift({ lineno: 6, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 7, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/' + (video) + '', true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var video = $$obj[$index];

jade_debug.unshift({ lineno: 6, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 7, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/' + (video) + '', true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "jade/module/module.jade" });
if ( (yt_type == "playlist"))
{
jade_debug.unshift({ lineno: 14, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 14, filename: "jade/module/module.jade" });
// iterate youtube
;(function(){
  var $$obj = youtube;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var pl = $$obj[$index];

jade_debug.unshift({ lineno: 14, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 15, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/videoseries?list=' + pl, true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var pl = $$obj[$index];

jade_debug.unshift({ lineno: 14, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 15, filename: "jade/module/module.jade" });
buf.push("<iframe width=\"560\" height=\"315\"" + (jade.attr("src", '//www.youtube.com/embed/videoseries?list=' + pl, true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "jade/module/module.jade" });
buf.push("<div class=\"col-md-4\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: "jade/module/module.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("Jobs");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "jade/module/module.jade" });
// iterate jobs
;(function(){
  var $$obj = jobs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var job = $$obj[$index];

jade_debug.unshift({ lineno: 24, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 25, filename: "jade/module/module.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", '' + (job.projecturl) + '', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = job.projectname) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "jade/module/module.jade" });
if ( (job.averagebid))
{
jade_debug.unshift({ lineno: 28, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 28, filename: "jade/module/module.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("$" + (jade.escape((jade.interp = job.averagebid) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "jade/module/module.jade" });
buf.push("<div class=\"place-bid\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "jade/module/module.jade" });
buf.push("Amount:");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "jade/module/module.jade" });
buf.push("<input" + (jade.attr("id", 'amount' + (job.projectid) + '', true, false)) + " type=\"number\" placeholder=\"greater than $250\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "jade/module/module.jade" });
buf.push("Days:");
jade_debug.shift();
jade_debug.unshift({ lineno: 37, filename: "jade/module/module.jade" });
buf.push("<input type=\"number\"" + (jade.attr("id", 'days' + (job.projectid) + '', true, false)) + " class=\"form-control\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "jade/module/module.jade" });
buf.push("Description:");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "jade/module/module.jade" });
buf.push("<textarea" + (jade.attr("id", '#description' + (job.projectid) + '', true, false)) + " class=\"form-control\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</textarea>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 41, filename: "jade/module/module.jade" });
buf.push("<button" + (jade.attr("id", '' + (job.projectid) + '', true, false)) + " type=\"button\"" + (jade.attr("projectid", '' + (job.projectid) + '', true, false)) + " class=\"btn btn-default btn-lg bid_submit\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("Place Bid");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "jade/module/module.jade" });
buf.push("<hr/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var job = $$obj[$index];

jade_debug.unshift({ lineno: 24, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 25, filename: "jade/module/module.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", '' + (job.projecturl) + '', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = job.projectname) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "jade/module/module.jade" });
if ( (job.averagebid))
{
jade_debug.unshift({ lineno: 28, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 28, filename: "jade/module/module.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("$" + (jade.escape((jade.interp = job.averagebid) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "jade/module/module.jade" });
buf.push("<div class=\"place-bid\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "jade/module/module.jade" });
buf.push("Amount:");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "jade/module/module.jade" });
buf.push("<input" + (jade.attr("id", 'amount' + (job.projectid) + '', true, false)) + " type=\"number\" placeholder=\"greater than $250\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "jade/module/module.jade" });
buf.push("Days:");
jade_debug.shift();
jade_debug.unshift({ lineno: 37, filename: "jade/module/module.jade" });
buf.push("<input type=\"number\"" + (jade.attr("id", 'days' + (job.projectid) + '', true, false)) + " class=\"form-control\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "jade/module/module.jade" });
buf.push("Description:");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "jade/module/module.jade" });
buf.push("<textarea" + (jade.attr("id", '#description' + (job.projectid) + '', true, false)) + " class=\"form-control\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</textarea>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "jade/module/module.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 41, filename: "jade/module/module.jade" });
buf.push("<button" + (jade.attr("id", '' + (job.projectid) + '', true, false)) + " type=\"button\"" + (jade.attr("projectid", '' + (job.projectid) + '', true, false)) + " class=\"btn btn-default btn-lg bid_submit\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("Place Bid");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "jade/module/module.jade" });
buf.push("<hr/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
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
jade_debug.unshift({ lineno: 47, filename: "jade/module/module.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 48, filename: "jade/module/module.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 49, filename: "jade/module/module.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: jade_debug[0].filename });
buf.push("Courses");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "jade/module/module.jade" });
buf.push("<table>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: "jade/module/module.jade" });
// iterate courses
;(function(){
  var $$obj = courses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var course = $$obj[$index];

jade_debug.unshift({ lineno: 51, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 52, filename: "jade/module/module.jade" });
if ( (course != ""))
{
jade_debug.unshift({ lineno: 53, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 53, filename: "jade/module/module.jade" });
if ( (course.Title))
{
jade_debug.unshift({ lineno: 54, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 54, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 55, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", '' + (course.CourseURL) + '', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = course.Title) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 57, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = course.Institution) == null ? '' : jade.interp)) + " (" + (jade.escape((jade.interp = course.TeachingDate) == null ? '' : jade.interp)) + ") ");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 59, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: jade_debug[0].filename });
buf.push("Instructors: " + (jade.escape((jade.interp = course.Instructors) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 61, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push("Description: " + (jade.escape((jade.interp = course.Description) == null ? '' : jade.interp)) + " ");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 63, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", '' + (course.DownloadPageLink) + '', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 68, filename: jade_debug[0].filename });
buf.push("Course Materials");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 69, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: jade_debug[0].filename });
buf.push("&nbsp");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
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

jade_debug.unshift({ lineno: 51, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 52, filename: "jade/module/module.jade" });
if ( (course != ""))
{
jade_debug.unshift({ lineno: 53, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 53, filename: "jade/module/module.jade" });
if ( (course.Title))
{
jade_debug.unshift({ lineno: 54, filename: "jade/module/module.jade" });
jade_debug.unshift({ lineno: 54, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 55, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", '' + (course.CourseURL) + '', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = course.Title) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 57, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = course.Institution) == null ? '' : jade.interp)) + " (" + (jade.escape((jade.interp = course.TeachingDate) == null ? '' : jade.interp)) + ") ");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 59, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: jade_debug[0].filename });
buf.push("Instructors: " + (jade.escape((jade.interp = course.Instructors) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 61, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push("Description: " + (jade.escape((jade.interp = course.Description) == null ? '' : jade.interp)) + " ");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 63, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: "jade/module/module.jade" });
buf.push("<a target=\"_blank\"" + (jade.attr("href", '' + (course.DownloadPageLink) + '', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 68, filename: jade_debug[0].filename });
buf.push("Course Materials");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 69, filename: "jade/module/module.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: "jade/module/module.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: jade_debug[0].filename });
buf.push("&nbsp");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
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
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  .row\n    .col-md-8\n      h1 #{name}\n      if (yt_type == \"video\")\n        for video in youtube\n          iframe(width='560', \n            height='315', \n            src='//www.youtube.com/embed/#{video}', \n            frameborder='0', \n            allowfullscreen='allowfullscreen'\n          )\n      if (yt_type == \"playlist\")\n        for pl in youtube\n          iframe(\n            width='560', \n            height='315', \n            src='//www.youtube.com/embed/videoseries?list=' + pl, \n            frameborder='0', \n            allowfullscreen='allowfullscreen'\n          )\n    .col-md-4\n      h1 Jobs\n      for job in jobs\n        b\n          a(target='_blank', href='#{job.projecturl}') #{job.projectname}\n        if (job.averagebid)\n          b $#{job.averagebid}\n        .place-bid\n          | Amount:\n          input.form-control(\n            id = 'amount#{job.projectid}', \n            type='number', \n            placeholder='greater than $250'\n          )\n          | Days:\n          input.form-control(type='number', id='days#{job.projectid}')\n          | Description:\n          textarea.form-control(id = '#description#{job.projectid}')\n          br\n          button.btn.btn-default.btn-lg.bid_submit(\n            id = '#{job.projectid}', \n            type='button', \n            projectid='#{job.projectid}'\n          ) Place Bid\n          hr\n  .row\n    .col-md-12\n  h2 Courses\n  table\n    for course in courses\n      if (course != \"\")\n        if (course.Title)\n          tr\n            td\n              a(target='_blank', href='#{course.CourseURL}') #{course.Title}\n          tr\n            td #{course.Institution} (#{course.TeachingDate}) \n          tr\n            td Instructors: #{course.Instructors}\n          tr\n            td Description: #{course.Description} \n          tr\n            td\n              a(\n                target='_blank', \n                href='#{course.DownloadPageLink}'\n              ) Course Materials\n          tr\n            td &nbsp");
}
}
};