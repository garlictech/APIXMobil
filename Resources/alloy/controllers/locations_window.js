function Controller() {
    require("alloy/controllers/table_common").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "locations_window";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.baseController = "table_common";
    alert("A " + tableroot);
    require("utils").registerTextUpdates($.top_label);
    var locations = Alloy.Collections.location;
    locations.fetch();
    Ti.App.addEventListener("GoToHome", function() {
        $.locations_window.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;