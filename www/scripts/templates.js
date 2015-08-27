{"1":function(depth0,helpers,partials,data) {
    return " helper allows us to change context for template between "
    + this.escapeExpression(helpers['with'].call(depth0,{"name":"with","hash":{},"data":data}))
    + " and ";
},"3":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<form class=\"form-horizontal\">\r\n    <fieldset>\r\n        <legend>Edit item</legend>\r\n        "
    + alias2((helpers.partial || (depth0 && depth0.partial) || alias1).call(depth0,"item.form",{"name":"partial","hash":{},"data":data}))
    + "\r\n    </fieldset>\r\n</form>\r\n<div class=\"btn-group\">\r\n    <button class=\"btn btn-large btn-primary\" "
    + alias2((helpers.action || (depth0 && depth0.action) || alias1).call(depth0,"update",depth0,{"name":"action","hash":{},"data":data}))
    + ">Update</button>\r\n    <button class=\"btn btn-large btn-danger\" "
    + alias2((helpers.action || (depth0 && depth0.action) || alias1).call(depth0,"cancel",depth0,{"name":"action","hash":{},"data":data}))
    + ">Cancel</button>\r\n</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!--"
    + ((stack1 = helpers['with'].call(depth0,{"name":"with","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ".-->\r\n\r\n<!--\r\n"
    + this.escapeExpression(((helper = (helper = helpers.partial || (depth0 != null ? depth0.partial : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"partial","hash":{},"data":data}) : helper)))
    + " helper renders a template within its current context.\r\nThis allows us to reuse the photo.form template on both photo.edit and photo.new\r\n-->\r\n\r\n"
    + ((stack1 = helpers['with'].call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.item : stack1)) != null ? stack1.content : stack1),{"name":"with","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true}
{"1":function(depth0,helpers,partials,data) {
    return "Upload image";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"form-group\">\r\n    <label class=\"control-label col-lg-2\" for=\"imageField\">Image</label>\r\n    <div class=\"col-lg-10\">\r\n        "
    + ((stack1 = (helpers['canvas-file'] || (depth0 && depth0['canvas-file']) || alias1).call(depth0,{"name":"canvas-file","hash":{"value":(depth0 != null ? depth0.image : depth0),"height":250,"width":250},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>\r\n<div class=\"form-group\">\r\n    <label class=\"control-label col-lg-2\" for=\"inputTitle\">Title</label>\r\n    <div class=\"col-lg-10\">\r\n        "
    + alias2((helpers.view || (depth0 && depth0.view) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.Ember : depth0)) != null ? stack1.TextField : stack1),{"name":"view","hash":{"classNames":"form-control","id":"inputTitle","valueBinding":(depth0 != null ? depth0.title : depth0)},"data":data}))
    + "\r\n    </div>\r\n</div>\r\n<div class=\"form-group\">\r\n    <label class=\"control-label col-lg-2\" for=\"textareaDescription\">Description</label>\r\n    <div class=\"col-lg-10\">\r\n        "
    + alias2((helpers.view || (depth0 && depth0.view) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.Ember : depth0)) != null ? stack1.TextArea : stack1),{"name":"view","hash":{"id":"textareaDescription","classNames":"form-control","valueBinding":(depth0 != null ? depth0.description : depth0)},"data":data}))
    + "\r\n    </div>\r\n</div>\r\n<input type=\"hidden\" "
    + alias2((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || alias1).call(depth0,{"name":"bind-attr","hash":{"value":(depth0 != null ? depth0.guid : depth0)},"data":data}))
    + " id=\"guid\"/>";
},"useData":true}
{"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<div class=\"container\">\r\n    <div class=\"row preview\">\r\n        <div class=\"col-md-4\">\r\n            <img "
    + alias2((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || alias1).call(depth0,{"name":"bind-attr","hash":{"src":(depth0 != null ? depth0.image : depth0)},"data":data}))
    + " class=\"thumbnail pull-right\" />\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <h2>"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n            <p>"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        "
    + alias2(((helper = (helper = helpers.outlet || (depth0 != null ? depth0.outlet : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"outlet","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n</div>";
},"useData":true}
{"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<form class=\"form-horizontal\" role=\"form\">\r\n    <fieldset>\r\n        <legend>New item</legend>\r\n        "
    + alias2((helpers.partial || (depth0 && depth0.partial) || alias1).call(depth0,"item.form",{"name":"partial","hash":{},"data":data}))
    + "\r\n    </fieldset>\r\n</form>\r\n<div class=\"btn-group\">\r\n    <button class=\"btn btn-large btn-primary\" "
    + alias2((helpers.action || (depth0 && depth0.action) || alias1).call(depth0,"create",(depth0 != null ? depth0.content : depth0),{"name":"action","hash":{},"data":data}))
    + ">Create</button>\r\n    <button class=\"btn btn-large btn-danger\" "
    + alias2((helpers.action || (depth0 && depth0.action) || alias1).call(depth0,"cancel",(depth0 != null ? depth0.content : depth0),{"name":"action","hash":{},"data":data}))
    + ">Cancel</button>\r\n</div>";
},"useData":true}
{"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "		<tr>\r\n			<td "
    + alias2((helpers.action || (depth0 && depth0.action) || alias1).call(depth0,"goToItem",depth0,{"name":"action","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>\r\n				<span class=\"edit glyphicon glyphicon-edit\" "
    + alias2((helpers.action || (depth0 && depth0.action) || alias1).call(depth0,"edit",depth0,{"name":"action","hash":{},"data":data}))
    + "></span>\r\n				<span class=\"remove glyphicon glyphicon-remove-circle\" "
    + alias2((helpers.action || (depth0 && depth0.action) || alias1).call(depth0,"remove",depth0,{"name":"action","hash":{},"data":data}))
    + "></span>\r\n			</td>\r\n		</tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<!--\r\n"
    + alias2(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"action","hash":{},"data":data}) : helper)))
    + " helper triggers the action that's specified by the first parameter and passes to it the remaining parameters.\r\nthis refers to an instance of the model that is being rendered in this row.\r\n-->\r\n<<!-таблицу со списком лучше сделать на дивах и поместить в элемент по всей ширине и высотой 80 процентов (это если по рисунку)->>\r\n<button class=\"btn btn-large btn-primary new\" "
    + alias2((helpers.action || (depth0 && depth0.action) || alias1).call(depth0,"goToNewWish",{"name":"action","hash":{},"data":data}))
    + ">New wish</button>\r\n<table class=\"table table-striped\">\r\n    <tbody>\r\n    <tr>\r\n        <th>Image</th>\r\n        <th>Title</th>\r\n        <th>Description</th>\r\n        <th>Actions</th>\r\n    </tr>\r\n"
    + ((stack1 = helpers.each.call(depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n\r\n<<!-Create кнопка - див по всей ширине и высотой процентов 20->>";
},"useData":true}