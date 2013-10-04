function Controller() {
    require("alloy/controllers/picker").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "date_picker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.baseController = "picker";
    Ti.API.debug("date_picker constructor finished");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;