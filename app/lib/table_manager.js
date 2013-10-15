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
TableManager.prototype.openBookmarkedTable = function(tableLocator)
{
    if ( ! tableLocator.equal(this.actualTableLocator())) {
        this.openChildTable(tableLocator);
    }
};

// ----------------------------------------------------------------------------
TableManager.prototype.closeTable = function(window) {
    window.close();
};

// ----------------------------------------------------------------------------
TableManager.prototype.actualTableLocator = function() {
    return Alloy.Globals.TablePath[Alloy.Globals.TablePath.length - 1];
};

// ----------------------------------------------------------------------------
// Create a view by passing the window parameter to it.
TableManager.prototype.addTableView = function(
    controllerName, window, collection
) {
    var view = Alloy.createController(controllerName, {
        window: window,
        collection: collection,
        controllerName: controllerName
    }).getView();

    window.add(view);
};

// ----------------------------------------------------------------------------
var tableManager = new TableManager();
module.exports = tableManager;
