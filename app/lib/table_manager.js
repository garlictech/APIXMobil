// ----------------------------------------------------------------------------
// TableManager class. Keeps track of the set of data tables, and provides some
// global functions for them.

function TableManager() {
    if (Alloy.Globals.ActualTableIndex === 'undefined') {
        // Track if we are at the root table or not
        Alloy.Globals.ActualTableIndex = 0;
    }
}

// ----------------------------------------------------------------------------

TableManager.prototype.openChildTable = function
    (childWindow, childCollection)
{
    Alloy.Globals.ActualTableIndex++;
    var controller = Alloy.createController(
        childWindow, {collectionName: childCollection}).getView();
    // This is defined in tables.js...
    // The controller must be open in the tab, otherwise, the new window
    // will overlay the whole tab group - so tab group navigation will
    // be invisible.
    Alloy.Globals.tabgroup.activeTab.open(controller);
};

// ----------------------------------------------------------------------------

TableManager.prototype.isRootTable = function() {
    return Alloy.Globals.ActualTableIndex === 0;
};

// ----------------------------------------------------------------------------
TableManager.prototype.closeTable = function(window) {
    Alloy.Globals.ActualTableIndex--;
    window.close();
};

// ----------------------------------------------------------------------------
exports.manager = new TableManager();
