// ----------------------------------------------------------------------------
// TableManager class. Keeps track of the set of data tables, and provides some
// global functions for them.
var Utils = require("utils");

// ----------------------------------------------------------------------------
function TableManager() {}

// ----------------------------------------------------------------------------
TableManager.prototype.openChildTable = function(collection, isNotAnimated)
{
    var controller = Alloy.createController(collection.viewControllerName,
        {collection: collection}
    ).getView().open(
        controller, {animated: this.animated(isNotAnimated)}
    );
};

// ----------------------------------------------------------------------------
TableManager.prototype.reopenTable = function(window, collection)
{
    this.openChildTable(collection, true);
    this.closeTable(window, true);
};

// ----------------------------------------------------------------------------
TableManager.prototype.animated = function(isNotAnimated) {
    return Utils.undefined(isNotAnimated) ? true : ! isNotAnimated;
};

// ----------------------------------------------------------------------------
TableManager.prototype.closeTable = function(window, isNotAnimated) {
    window.close({animated: this.animated(isNotAnimated)});
};

// ----------------------------------------------------------------------------
module.exports = new TableManager();
