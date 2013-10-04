function Controller() {
    function close() {
        $.picker_window.close(Titanium.UI.createAnimation({
            bottom: -220
        }));
        args.cover_window.close();
    }
    function cancelClicked() {
        close();
    }
    function doneClicked() {
        args.useValue($.picker.value);
        close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "picker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.picker_window = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        height: 220,
        bottom: -220,
        backgroundColor: "white",
        id: "picker_window"
    });
    $.__views.picker_window && $.addTopLevelView($.__views.picker_window);
    $.__views.picker = Ti.UI.createPicker({
        selectionIndicator: "true",
        useSpinner: "true",
        type: "Ti.UI.PICKER_TYPE_DATE",
        top: "20",
        height: "200",
        id: "picker"
    });
    $.__views.picker_window.add($.__views.picker);
    $.__views.cancel = Ti.UI.createLabel({
        top: "0",
        backgroundColor: "white",
        color: "black",
        left: 5,
        text: L("Cancel"),
        id: "cancel"
    });
    $.__views.picker_window.add($.__views.cancel);
    cancelClicked ? $.__views.cancel.addEventListener("click", cancelClicked) : __defers["$.__views.cancel!click!cancelClicked"] = true;
    $.__views.done = Ti.UI.createLabel({
        top: "0",
        backgroundColor: "white",
        color: "black",
        right: 5,
        text: L("OK"),
        id: "done"
    });
    $.__views.picker_window.add($.__views.done);
    doneClicked ? $.__views.done.addEventListener("click", doneClicked) : __defers["$.__views.done!click!doneClicked"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.debug("picker constructor started");
    var args = arguments[0] || {};
    $.picker.value = args.initialData;
    $.picker.maxData = new Date();
    $.picker.type = Ti.UI.PICKER_TYPE_DATE;
    exports.getController = function() {
        return $.picker;
    };
    exports.animate_in = Titanium.UI.createAnimation({
        bottom: 0
    });
    Ti.API.debug("picker constructor finished");
    __defers["$.__views.cancel!click!cancelClicked"] && $.__views.cancel.addEventListener("click", cancelClicked);
    __defers["$.__views.done!click!doneClicked"] && $.__views.done.addEventListener("click", doneClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;