function Controller() {
    function SetBookmarkButton() {
        this.setIcon();
    }
    function onLongpress() {
        setBookmarkButton.onLongpress();
    }
    function onClick() {
        setBookmarkButton.onClick();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "set_bookmark_button";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.button = Ti.UI.createButton({
        backgroundColor: "#e9bf3c",
        borderColor: "#e9bf3c",
        color: "black",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "images/icons/bookmark.png",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        right: 45,
        bottom: 5,
        id: "button"
    });
    $.__views.button && $.addTopLevelView($.__views.button);
    onClick ? $.__views.button.addEventListener("click", onClick) : __defers["$.__views.button!click!onClick"] = true;
    onLongpress ? $.__views.button.addEventListener("longpress", onLongpress) : __defers["$.__views.button!longpress!onLongpress"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var propertyName = "Bookmark";
    SetBookmarkButton.prototype = new (require("controller"))(arguments);
    SetBookmarkButton.prototype.onClick = function() {
        alert("Clicked");
    };
    SetBookmarkButton.prototype.onLongpress = function() {
        Ti.App.Properties.setObject(propertyName, {
            collection: Alloy.Globals.ActualTableDescriptor.collection,
            index: Alloy.Globals.ActualTableDescriptor.index
        });
        this.setIcon();
    };
    SetBookmarkButton.prototype.isBookmarkSet = function() {
        return Ti.App.Properties.hasProperty(propertyName);
    };
    SetBookmarkButton.prototype.setIcon = function() {
        $.button.backgroundImage = this.isBookmarkSet() ? "images/icons/bookmark-alt.png" : "images/icons/bookmark.png";
    };
    var setBookmarkButton = new SetBookmarkButton();
    __defers["$.__views.button!click!onClick"] && $.__views.button.addEventListener("click", onClick);
    __defers["$.__views.button!longpress!onLongpress"] && $.__views.button.addEventListener("longpress", onLongpress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;