// ----------------------------------------------------------------------------
// SetBookmarkButton class.

// Bookmark property name in Properties
var propertyName = "Bookmark";

function SetBookmarkButton() {
    this.setIcon();
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
SetBookmarkButton.prototype = new (require("controller"))(arguments);

// ----------------------------------------------------------------------------

SetBookmarkButton.prototype.onClick = function() {
    alert("Clicked");
};

// ----------------------------------------------------------------------------

SetBookmarkButton.prototype.onLongpress = function() {
    // Set bookmark
    Ti.App.Properties.setObject(
        propertyName, {
            collection: Alloy.Globals.ActualTableDescriptor.collection,
            index: Alloy.Globals.ActualTableDescriptor.index
        }
    );

    this.setIcon();
};

// ----------------------------------------------------------------------------

SetBookmarkButton.prototype.isBookmarkSet = function() {
    return Ti.App.Properties.hasProperty(propertyName);
};

// ----------------------------------------------------------------------------

SetBookmarkButton.prototype.setIcon = function() {
    $.button.backgroundImage = this.isBookmarkSet() ?
        "images/icons/bookmark-alt.png" : "images/icons/bookmark.png";
};

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var setBookmarkButton = new SetBookmarkButton();

// ----------------------------------------------------------------------------

function onLongpress() {
    setBookmarkButton.onLongpress();
}

// ----------------------------------------------------------------------------

function onClick() {
    setBookmarkButton.onClick();
}
