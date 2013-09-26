function Controller() {
    function onChange(e) {
        var Config = require("config");
        Config.language = e.row.title;
        alert(e.row.title);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "set_language";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.set_language = Ti.UI.createWindow({
        id: "set_language"
    });
    $.__views.set_language && $.addTopLevelView($.__views.set_language);
    var __alloyId5 = [];
    $.__views.__alloyId4 = Ti.UI.createPicker({
        selectionIndicator: "true",
        backgroundColor: "#fff",
        id: "__alloyId4"
    });
    $.__views.set_language.add($.__views.__alloyId4);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        title: "English",
        val: "en",
        id: "__alloyId6"
    });
    __alloyId5.push($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createPickerRow({
        title: "Espagnol",
        val: "es",
        id: "__alloyId7"
    });
    __alloyId5.push($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createPickerRow({
        title: "Magyar",
        val: "hu",
        id: "__alloyId8"
    });
    __alloyId5.push($.__views.__alloyId8);
    $.__views.__alloyId4.add(__alloyId5);
    onChange ? $.__views.__alloyId4.addEventListener("change", onChange) : __defers["$.__views.__alloyId4!change!onChange"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openMainWindow = function(_tab) {
        _tab.open($.set_language);
    };
    __defers["$.__views.__alloyId4!change!onChange"] && $.__views.__alloyId4.addEventListener("change", onChange);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;