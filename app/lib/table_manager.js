// ----------------------------------------------------------------------------
// TableManager class. Keeps track of the set of data tables, and provides some
// global functions for them.

function TableManager() {}

// ----------------------------------------------------------------------------
TableManager.prototype.openChildTable = function(collection)
{
    var controller = Alloy.createController(collection.viewControllerName,
        {collection: collection}
    ).getView();
    // This is defined in tables.js...
    // The controller must be open in the tab, otherwise, the new window
    // will overlay the whole tab group - so tab group navigation will
    // be invisible.
    Alloy.Globals.tabgroup.activeTab.open(controller);
};

// ----------------------------------------------------------------------------
TableManager.prototype.closeTable = function(window) {
    window.close();
};

// ----------------------------------------------------------------------------
module.exports = new TableManager();
