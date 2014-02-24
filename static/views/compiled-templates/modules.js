var Templates = {
"modules":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/modules/modules.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,modules = locals_.modules;
jade_debug.unshift({ lineno: 0, filename: "jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/modules/modules.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/modules/modules.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("Modules");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "jade/modules/modules.jade" });
buf.push("<hr/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "jade/modules/modules.jade" });
buf.push("<table>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "jade/modules/modules.jade" });
// iterate modules
;(function(){
  var $$obj = modules;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var row = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 6, filename: "jade/modules/modules.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "jade/modules/modules.jade" });
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var module = $$obj[$index];

jade_debug.unshift({ lineno: 7, filename: "jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 8, filename: "jade/modules/modules.jade" });
buf.push("<div class=\"col-md-3\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "jade/modules/modules.jade" });
buf.push("<a" + (jade.attr("href", module.key, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = module.name) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var module = $$obj[$index];

jade_debug.unshift({ lineno: 7, filename: "jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 8, filename: "jade/modules/modules.jade" });
buf.push("<div class=\"col-md-3\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "jade/modules/modules.jade" });
buf.push("<a" + (jade.attr("href", module.key, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = module.name) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
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
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var row = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 6, filename: "jade/modules/modules.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "jade/modules/modules.jade" });
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var module = $$obj[$index];

jade_debug.unshift({ lineno: 7, filename: "jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 8, filename: "jade/modules/modules.jade" });
buf.push("<div class=\"col-md-3\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "jade/modules/modules.jade" });
buf.push("<a" + (jade.attr("href", module.key, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = module.name) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var module = $$obj[$index];

jade_debug.unshift({ lineno: 7, filename: "jade/modules/modules.jade" });
jade_debug.unshift({ lineno: 8, filename: "jade/modules/modules.jade" });
buf.push("<div class=\"col-md-3\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "jade/modules/modules.jade" });
buf.push("<a" + (jade.attr("href", module.key, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = module.name) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  h1 Modules\n  hr\n  table\n    each row in modules\n      .row\n        each module in row\n          .col-md-3\n            a(href=module.key) #{module.name}");
}
}
};