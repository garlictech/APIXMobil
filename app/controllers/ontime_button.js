// ----------------------------------------------------------------------------
// OnTime module.
//
// The module is responsibile for handling the "ontime" button. With the ontime
// button, you can record the actual table view, later you can jump there
// immediately, by clicking the button.
//
// At application startup, or after factory reset, there is no bookmark set, so
// the button color is grey, and does not respond to click event. You can set
// the bookmark with a longpress event. In this case, it records the actual
// collection displayed, in the Bookmark property.
//
// Required, SetBookmarkButton specific controller arguments ("arguments[0]"):
//
// - actualTableLocator: table locator object of teh actual table. This is the
// target of (new) longpress event: the next potential bookmark in case of
// user setting it.
//
var Config = require("config").config;
var TableLocator = require("table_locator").TableLocator;
var debug = require("debug");

// Property holding the bookmark in Ti.App.Properties (config)
var propertyName = "Bookmark";

// ----------------------------------------------------------------------------
// OnTime class.
function OnTime() {
    var self = this;

    this.addSettingsChangedHandler(function() {
        self.setColor();
    });
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
OnTime.prototype =
    new (require("controller"))(arguments[0], arguments[0].window);

// ----------------------------------------------------------------------------
OnTime.prototype.onClick = function() {
    if (this.isBookmarkSet()) {
        var tableLocator = new (require("table_locator")).TableLocator();
        tableLocator.copyFrom(Config.getProperty(propertyName).get());
        require("table_manager").manager.openBookmarkedTable(tableLocator);
    }
};

// ----------------------------------------------------------------------------
OnTime.prototype.onLongpress = function() {
    // Set bookmark
    this.args.actualTableLocator.copyToProperty(propertyName);
    this.setColor();
    alert(Alloy.Globals.L("ontime_set"));
};

// ----------------------------------------------------------------------------
OnTime.prototype.isBookmarkSet = function() {
    return typeof Config.getProperty(propertyName).get().collectionName !== "undefined";
};

// ----------------------------------------------------------------------------
OnTime.prototype.setColor = function() {
    $.button.backgroundColor = (this.isBookmarkSet() ? "red" : "#828282");
};

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var onTime = new OnTime();

// ----------------------------------------------------------------------------
function onLongpress() {
    onTime.onLongpress();
}

// ----------------------------------------------------------------------------
function onClick() {
    onTime.onClick();
}
