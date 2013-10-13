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
    Ti.API.debug("date_picker constructor started");
    exports.baseController = "picker";
    var args = arguments[0] || {};
    $.picker.value = args.value;
    $.picker.maxDate = new Date();
    $.picker.type = Ti.UI.PICKER_TYPE_DATE_AND_TIME;
    $.picker.addEventListener("change", function(e) {
        args.value = e.value;
    });
    Ti.API.debug("date_picker constructor finished");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;