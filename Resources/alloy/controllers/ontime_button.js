function Controller() {
    function OnTime() {
        var self = this;
        this.addSettingsChangedHandler(function() {
            self.setColor();
        });
    }
    function onLongpress() {
        onTime.onLongpress();
    }
    function onClick() {
        onTime.onClick();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ontime_button";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.button = Ti.UI.createButton({
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
        top: 64,
        title: "on time",
        width: 150,
        id: "button"
    });
    $.__views.button && $.addTopLevelView($.__views.button);
    onClick ? $.__views.button.addEventListener("click", onClick) : __defers["$.__views.button!click!onClick"] = true;
    onLongpress ? $.__views.button.addEventListener("longpress", onLongpress) : __defers["$.__views.button!longpress!onLongpress"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Config = require("config").config;
    require("table_locator").TableLocator;
    require("debug");
    var propertyName = "Bookmark";
    OnTime.prototype = new (require("controller"))(arguments[0], arguments[0].window);
    OnTime.prototype.onClick = function() {
        if (this.isBookmarkSet()) {
            var tableLocator = new (require("table_locator").TableLocator)();
            tableLocator.copyFrom(Config.getProperty(propertyName).get());
            require("table_manager").manager.openBookmarkedTable(tableLocator);
        }
    };
    OnTime.prototype.onLongpress = function() {
        this.args.actualTableLocator.copyToProperty(propertyName);
        this.setColor();
        alert(Alloy.Globals.L("ontime_set"));
    };
    OnTime.prototype.isBookmarkSet = function() {
        return "undefined" != typeof Config.getProperty(propertyName).get().collectionName;
    };
    OnTime.prototype.setColor = function() {
        $.button.backgroundColor = this.isBookmarkSet() ? "red" : "#828282";
    };
    var onTime = new OnTime();
    __defers["$.__views.button!click!onClick"] && $.__views.button.addEventListener("click", onClick);
    __defers["$.__views.button!longpress!onLongpress"] && $.__views.button.addEventListener("longpress", onLongpress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;