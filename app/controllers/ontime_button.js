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
// - arguments[0].window: The window that contains the button.
// - arguments[0].actualCollection: The collection that the above window.
//   displays. New window is not opened if actual collection and bookmarked
//   collections are the same.
//
// Collections should be identified uniquely by a string, they will be
// compared when deciding if bookmarked collection is the actual one.
var Config = require("config").config;
var Utils = require("utils");
var CollectionPrototypeGenerator = require("collection_prototype_generator");

// Property holding the bookmark in Ti.App.Properties (config)
var propertyName = "Bookmark";

// ----------------------------------------------------------------------------
// OnTime class.
function OnTime(args) {
    var self = this;
    this.actualCollection = args.actualCollection;

    this.addSettingsChangedHandler(function() {
        self.setColor();
    });

    this.addSettingsChangedHandler(this.setColor);
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
OnTime.prototype = new (require("controller"))(arguments[0]);

// ----------------------------------------------------------------------------
OnTime.prototype.onClick = function() {
    if (this.isBookmarkSet()) {
        var id = Config.getProperty(propertyName).get().collectionId;

        if (id != this.actualCollection.id())
        {
            var coll = Alloy.Globals.collections[id];
            // Get the collection if it is not downloaded
            if (Utils.undefined(coll)) {
                coll = new (CollectionPrototypeGenerator({
                    _id: id,
                    viewControllerName: Config.getProperty(propertyName).get().viewControllerName
                }))();
            }

            require("table_manager").openChildTable(coll);
        }
    }
};

// ----------------------------------------------------------------------------
OnTime.prototype.onLongpress = function() {
    // Set bookmark
    Config.getProperty(propertyName).set({
        collectionId: this.actualCollection.id(),
        viewControllerName: this.actualCollection.viewControllerName()
    });
    this.setColor();
    alert(Alloy.Globals.L("ontime_set"));
};

// ----------------------------------------------------------------------------
OnTime.prototype.isBookmarkSet = function() {
    return !Utils.undefined(Config.getProperty(propertyName).get().collectionId);
};

// ----------------------------------------------------------------------------
OnTime.prototype.setColor = function() {
    $.button.backgroundColor = (this.isBookmarkSet() ? "red" : "#828282");
};

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var onTime = new OnTime(arguments[0]);

// ----------------------------------------------------------------------------
function onLongpress() {
    onTime.onLongpress();
}

// ----------------------------------------------------------------------------
function onClick() {
    onTime.onClick();
}
