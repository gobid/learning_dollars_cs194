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
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "jade/modules/modules.jade" });
buf.push("<div class=\"col-md-9\">");
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
jade_debug.unshift({ lineno: 10, filename: "jade/modules/modules.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "jade/modules/modules.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "jade/modules/modules.jade" });
buf.push("<div class=\"col-md-3\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "jade/modules/modules.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "jade/modules/modules.jade" });
buf.push("<input id=\"module_input\" type=\"text\" placeholder=\"Create a new module\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "jade/modules/modules.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "jade/modules/modules.jade" });
buf.push("<button id=\"submit_new_module\" type=\"button\" class=\"btn btn-default btn-small bid_submit\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("Add module");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "jade/modules/modules.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "jade/modules/modules.jade" });
buf.push("<br/>");
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  h1 Modules\n  .row \n    .col-md-9\n      each row in modules\n        .row\n          each module in row\n            .col-md-3\n              a(href=module.key) #{module.name}\n      br\n      br\n    .col-md-3\n      .row \n        input.form-control(\n          id = 'module_input'\n          type='text', \n          placeholder='Create a new module'\n        )\n        br\n        button.btn.btn-default.btn-small.bid_submit(\n          id = 'submit_new_module',\n          type='button'\n        ) Add module\n        br\n        br\n");
}
},

"new_module_exists":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/modules/new_module_exists.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/modules/new_module_exists.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/modules/new_module_exists.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "jade/modules/new_module_exists.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "jade/modules/new_module_exists.jade" });
buf.push("<div id=\"module_alert\" class=\"alert alert-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("Module already exists");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "br\nbr\ndiv(class=\"alert alert-info\" id=\"module_alert\") Module already exists");
}
},

"new_module_failure":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/modules/new_module_failure.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/modules/new_module_failure.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/modules/new_module_failure.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "jade/modules/new_module_failure.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "jade/modules/new_module_failure.jade" });
buf.push("<div id=\"module_alert\" class=\"alert alert-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "jade/modules/new_module_failure.jade" });
buf.push("Failure. Reload page, fill in new module name, and repost.");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "br\nbr\ndiv(class=\"alert alert-danger\" id=\"module_alert\")\n  | Failure. Reload page, fill in new module name, and repost.");
}
},

"new_module_success":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/modules/new_module_success.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/modules/new_module_success.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/modules/new_module_success.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "jade/modules/new_module_success.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "jade/modules/new_module_success.jade" });
buf.push("<div id=\"module_alert\" class=\"alert alert-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("New module created");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "br\nbr\ndiv(class=\"alert alert-success\" id=\"module_alert\") New module created");
}
}
};