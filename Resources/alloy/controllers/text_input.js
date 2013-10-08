function Controller() {
    function TextInput(args, uiElements) {
        WindowController.call(this, args, uiElements, $.window, $);
    }
    function cancelClicked() {
        textInput.close();
    }
    function doneClicked() {
        textInput.doneClicked();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "text_input";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
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
        text_id: "server_name",
        id: "top_label"
    });
    $.__views.window.add($.__views.top_label);
    $.__views.input = Ti.UI.createTextField({
        paddingLeft: 5,
        backgroundColor: "#828282",
        borderColor: "#e9bf3c",
        borderWidth: 1,
        height: 40,
        autocorrect: false,
        top: 80,
        left: 5,
        right: 5,
        id: "input"
    });
    $.__views.window.add($.__views.input);
    $.__views.cancel_button = Ti.UI.createButton({
        backgroundColor: "#828282",
        borderColor: "black",
        color: "black",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "images/icons/cancel.png",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        top: 23,
        left: 10,
        id: "cancel_button"
    });
    $.__views.window.add($.__views.cancel_button);
    cancelClicked ? $.__views.cancel_button.addEventListener("click", cancelClicked) : __defers["$.__views.cancel_button!click!cancelClicked"] = true;
    $.__views.done_button = Ti.UI.createButton({
        backgroundColor: "#828282",
        borderColor: "black",
        color: "black",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "images/icons/check.png",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        top: 23,
        right: 10,
        id: "done_button"
    });
    $.__views.window.add($.__views.done_button);
    doneClicked ? $.__views.done_button.addEventListener("click", doneClicked) : __defers["$.__views.done_button!click!doneClicked"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var WindowController = require("window_controller");
    TextInput.prototype = Object.create(WindowController.prototype);
    TextInput.prototype.doneClicked = function() {
        this.args.useValue($.input.value);
        this.close();
    };
    var textInput = new TextInput(arguments, [ $.top_label ]);
    __defers["$.__views.cancel_button!click!cancelClicked"] && $.__views.cancel_button.addEventListener("click", cancelClicked);
    __defers["$.__views.done_button!click!doneClicked"] && $.__views.done_button.addEventListener("click", doneClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;