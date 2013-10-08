function Controller() {
    function Info(args, uiElements) {
        WindowController.call(this, args, uiElements, $.window, $);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "info";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "window"
    });
    $.__views.top_label = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        borderRadius: 5,
        height: 40,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20"
        },
        color: "#000",
        top: "20",
        text_id: "help",
        id: "top_label"
    });
    $.__views.window.add($.__views.top_label);
    $.__views.scrollview = Ti.UI.createScrollView({
        top: "60",
        id: "scrollview"
    });
    $.__views.window.add($.__views.scrollview);
    $.__views.content = Ti.UI.createLabel({
        text_id: "detailed_help",
        color: "#dddddd",
        id: "content"
    });
    $.__views.scrollview.add($.__views.content);
    $.__views.info = Ti.UI.createTab({
        window: $.__views.window,
        id: "info"
    });
    $.__views.info && $.addTopLevelView($.__views.info);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("eventHandlers");
    var WindowController = require("window_controller");
    Info.prototype = Object.create(WindowController.prototype);
    var info = new Info(arguments, [ $.content, $.top_label ]);
    info.addBackToTablesButton();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;