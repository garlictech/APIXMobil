function Controller() {
    function callback(args) {
        $.activity_logging_in.hide();
        alert(args.result + "Message: " + args.msg);
    }
    function doLogin() {
        $.activity_logging_in.show();
        Config.login($.username.getValue(), $.password.getValue(), callback);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId3 = Ti.UI.createWindow({
        tabBarHidden: "true",
        navBarHidden: "true",
        id: "__alloyId3"
    });
    $.__views.header_image = Ti.UI.createImageView({
        image: "images/start_screen_logo.png",
        top: 0,
        id: "header_image"
    });
    $.__views.__alloyId3.add($.__views.header_image);
    $.__views.username = Ti.UI.createTextField({
        paddingLeft: 5,
        backgroundColor: "#828282",
        borderColor: "#e9bf3c",
        borderWidth: 1,
        width: 200,
        height: 40,
        autocorrect: false,
        hintText: L("username"),
        top: "150",
        id: "username"
    });
    $.__views.__alloyId3.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        paddingLeft: 5,
        backgroundColor: "#828282",
        borderColor: "#e9bf3c",
        borderWidth: 1,
        width: 200,
        height: 40,
        autocorrect: false,
        hintText: L("password"),
        top: "189",
        passwordMask: true,
        id: "password"
    });
    $.__views.__alloyId3.add($.__views.password);
    $.__views.login_button = Ti.UI.createButton({
        backgroundColor: "#828282",
        borderColor: "#e9bf3c",
        color: "#e9bf3c",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "none",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        width: 150,
        height: 40,
        top: 260,
        title: L("login"),
        id: "login_button"
    });
    $.__views.__alloyId3.add($.__views.login_button);
    doLogin ? $.__views.login_button.addEventListener("click", doLogin) : __defers["$.__views.login_button!click!doLogin"] = true;
    $.__views.activity_logging_in = Ti.UI.createActivityIndicator({
        width: "auto",
        height: 30,
        top: 330,
        message: L("logging_in"),
        color: "white",
        style: "Ti.UI.ActivityIndicatorStyle.PLAIN",
        id: "activity_logging_in"
    });
    $.__views.__alloyId3.add($.__views.activity_logging_in);
    $.__views.bottom = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        height: 40,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "24"
        },
        color: "#000",
        bottom: "0",
        text: "APIXMobil",
        id: "bottom"
    });
    $.__views.__alloyId3.add($.__views.bottom);
    $.__views.login = Ti.UI.createTab({
        window: $.__views.__alloyId3,
        id: "login",
        title: "Login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Config = require("config");
    $.activity_logging_in.hide();
    __defers["$.__views.login_button!click!doLogin"] && $.__views.login_button.addEventListener("click", doLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;