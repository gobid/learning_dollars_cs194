function template(locals) {
var jade_debug = [{ lineno: 1, filename: "templates/jade/modules/modules.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,modules = locals_.modules;
jade_debug.unshift({ lineno: 0, filename: "templates/jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/jade/modules/modules.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "templates/jade/modules/modules.jade" });
buf.push("<html lang=\"en\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "templates/jade/modules/modules.jade" });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "templates/jade/modules/modules.jade" });
buf.push("<meta charset=\"utf-8\"/><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><meta name=\"description\" content=\"\"/><meta name=\"author\" content=\"\"/><link rel=\"shortcut icon\" href=\"static/bootstrap/docs/assets/ico/favicon.ico\"/><title></title><link href=\"static/bootstrap/docs/dist/css/bootstrap.min.css\" rel=\"stylesheet\"/><link href=\"static/views/css/navbar.css\" rel=\"stylesheet\"/><!-- Just for debugging purposes. Don't actually copy this line! --><!--if lt IE 9script(src='static/bootstrap/docs/assets/js/ie8-responsive-file-warning.js')--><!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries --><!--if lt IE 9script(src='https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js')\nscript(src='https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js')-->");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "templates/jade/modules/modules.jade" });
buf.push("<body>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "templates/jade/modules/modules.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "templates/jade/modules/modules.jade" });
buf.push("<div role=\"navigation\" class=\"navbar navbar-fixed-top navbar-inverse\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/\" class=\"navbar-brand\">Learning Dollars</a></div><div class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav\"><li><a href=\"/\">Home</a></li><li><a href=\"/team\">Team</a></li><li><a href=\"/about\">About</a></li><li><a href=\"/modules\">Modules</a></li><li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Dashboard<b class=\"caret\"></b></a><ul class=\"dropdown-menu\"><li><a href=\"/mailbox\">Mailbox</a></li><li><a href=\"/mybids\">My Bids</a></li><li><a href=\"/myposts\">My Posts</a></li><li><a href=\"/milestones\">Milestones</a></li></ul></li></ul><ul class=\"nav navbar-nav navbar-right\"><li><a></a></li></ul></div></div></div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "templates/jade/modules/modules.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("Modules");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "templates/jade/modules/modules.jade" });
buf.push("<hr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "templates/jade/modules/modules.jade" });
buf.push("<!-- the table isn't working perfectly but leo is making responsive -->");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "templates/jade/modules/modules.jade" });
buf.push("<!-- anyway, will merge that version-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "templates/jade/modules/modules.jade" });
buf.push("<table>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "templates/jade/modules/modules.jade" });
// iterate modules
;(function(){
  var $$obj = modules;
  if ('number' == typeof $$obj.length) {

    for (var m = 0, $$l = $$obj.length; m < $$l; m++) {
      var module = $$obj[m];

jade_debug.unshift({ lineno: 13, filename: "templates/jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 14, filename: "templates/jade/modules/modules.jade" });
if ( (m % 5 == 0))
{
jade_debug.unshift({ lineno: 15, filename: "templates/jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 15, filename: "templates/jade/modules/modules.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "templates/jade/modules/modules.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "templates/jade/modules/modules.jade" });
buf.push("<a" + (jade.attr("href", module.key, true, true)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = module.name) == null ? '' : jade.interp)) + "");
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
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 19, filename: "templates/jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 19, filename: "templates/jade/modules/modules.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "templates/jade/modules/modules.jade" });
buf.push("<a" + (jade.attr("href", module.key, true, true)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = module.name) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var m in $$obj) {
      $$l++;      var module = $$obj[m];

jade_debug.unshift({ lineno: 13, filename: "templates/jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 14, filename: "templates/jade/modules/modules.jade" });
if ( (m % 5 == 0))
{
jade_debug.unshift({ lineno: 15, filename: "templates/jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 15, filename: "templates/jade/modules/modules.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "templates/jade/modules/modules.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "templates/jade/modules/modules.jade" });
buf.push("<a" + (jade.attr("href", module.key, true, true)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = module.name) == null ? '' : jade.interp)) + "");
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
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 19, filename: "templates/jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 19, filename: "templates/jade/modules/modules.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "templates/jade/modules/modules.jade" });
buf.push("<a" + (jade.attr("href", module.key, true, true)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = module.name) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
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
jade_debug.unshift({ lineno: undefined, filename: "templates/jade/modules/modules.jade" });
buf.push("<script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script><script src=\"static/bootstrap/docs/dist/js/bootstrap.min.js\"></script>");
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml(lang='en')\nhead\n    include ../header.html\n  body\n    .container\n      include ../navbar.html\n      h1 Modules\n      hr\n      // the table isn't working perfectly but leo is making responsive \n      // anyway, will merge that version\n      table\n        each module, m in modules\n          if (m % 5 == 0)\n            tr\n              td\n                a(href=module.key) #{module.name}\n          else \n              td\n                a(href=module.key) #{module.name}\n    include ../footer.html\n");
}
}