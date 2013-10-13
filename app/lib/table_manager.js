// ----------------------------------------------------------------------------
// TableManager class. Keeps track of the set of data tables, and provides some
// global functions for them.

function TableManager() {}

// ----------------------------------------------------------------------------
TableManager.prototype.openChildTable = function(tableLocator)
{
    var controller = Alloy.createController(
            tableLocator.controllerName,
            {tableLocator: tableLocator}).getView();
    // This is defined in tables.js...
    // The controller must be open in the tab, otherwise, the new window
    // will overlay the whole tab group - so tab group navigation will
    // be invisible.
    Alloy.Globals.tabgroup.activeTab.open(controller);
    Alloy.Globals.ActualTableLocator = tableLocator;
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
exports.manager = new TableManager();
