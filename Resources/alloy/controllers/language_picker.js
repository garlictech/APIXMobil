function Controller() {
    require("alloy/controllers/picker").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "language_picker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.debug("language_picker constructor started");
    exports.baseController = "picker";
    var locale = require("locale");
    var args = arguments[0] || {};
    var data = [];
    var actualRow = 0;
    for (var i = 0; locale.supportedLocales.length > i; ++i) {
        loc = locale.supportedLocales[i];
        data[i] = Ti.UI.createPickerRow({
            title: locale.getHumanTextOfLocale(loc)
        });
        loc === Ti.App.Properties.getString("Locale") && (actualRow = i);
    }
    $.picker.add(data);
    $.picker.setSelectedRow(0, actualRow);
    $.picker.addEventListener("change", function(e) {
        args.value = locale.supportedLocales[e.rowIndex];
    });
    Ti.API.debug("language_picker constructor finished");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;