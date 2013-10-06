function Controller() {
    function doLogin() {
        $.username.blur();
        $.password.blur();
        $.activity_logging_in.show();
        username = $.username.getValue();
        password = $.password.getValue();
        res = webServiceClient.login(username, password);
        $.activity_logging_in.hide();
        if (res) {
            Config.setLoggedIn(username, password);
            Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
        } else alert(webServiceClient.errorMessage);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login_window = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "login_window"
    });
    $.__views.header_image = Ti.UI.createImageView({
        image: "images/start_screen_logo.png",
        top: "20",
        id: "header_image"
    });
    $.__views.login_window.add($.__views.header_image);
    $.__views.username = Ti.UI.createTextField({
        paddingLeft: 5,
        backgroundColor: "#828282",
        borderColor: "#e9bf3c",
        borderWidth: 1,
        height: 40,
        autocorrect: false,
        width: 200,
        hintText_id: "username",
        top: "150",
        id: "username"
    });
    $.__views.login_window.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        paddingLeft: 5,
        backgroundColor: "#828282",
        borderColor: "#e9bf3c",
        borderWidth: 1,
        height: 40,
        autocorrect: false,
        width: 200,
        hintText_id: "password",
        top: "189",
        passwordMask: true,
        id: "password"
    });
    $.__views.login_window.add($.__views.password);
    $.__views.login_button = Ti.UI.createButton({
        backgroundColor: "#828282",
        borderColor: "#e9bf3c",
        color: "black",
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
        title_id: "login",
        id: "login_button"
    });
    $.__views.login_window.add($.__views.login_button);
    doLogin ? $.__views.login_button.addEventListener("click", doLogin) : __defers["$.__views.login_button!click!doLogin"] = true;
    $.__views.activity_logging_in = Ti.UI.createActivityIndicator({
        width: "auto",
        height: 30,
        top: 330,
        message_id: "in_progress",
        color: "white",
        style: "Ti.UI.ActivityIndicatorStyle.PLAIN",
        id: "activity_logging_in"
    });
    $.__views.login_window.add($.__views.activity_logging_in);
    $.__views.bottom = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        borderRadius: 5,
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
    $.__views.login_window.add($.__views.bottom);
    $.__views.login = Ti.UI.createTab({
        window: $.__views.login_window,
        id: "login",
        title: "Login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Config = require("config");
    var webServiceClient = require("webServiceClient");
    require("utils").registerTextUpdates($.username, $.password, $.login_button, $.activity_logging_in);
    Alloy.Globals.tabgroup = $.index;
    Ti.UI.iPhone.StatusBar = Ti.UI.LIGHT_CONTENT;
    $.activity_logging_in.hide();
    __defers["$.__views.login_button!click!doLogin"] && $.__views.login_button.addEventListener("click", doLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;