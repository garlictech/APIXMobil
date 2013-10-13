function TableManager() {}

TableManager.prototype.openChildTable = function(tableLocator) {
    var controller = Alloy.createController(tableLocator.controllerName, {
        tableLocator: tableLocator
    }).getView();
    Alloy.Globals.tabgroup.activeTab.open(controller);
    Alloy.Globals.ActualTableLocator = tableLocator;
};

TableManager.prototype.openBookmarkedTable = function(tableLocator) {
    tableLocator.equal(this.actualTableLocator()) || this.openChildTable(tableLocator);
};

TableManager.prototype.closeTable = function(window) {
    window.close();
};

TableManager.prototype.actualTableLocator = function() {
    return Alloy.Globals.TablePath[Alloy.Globals.TablePath.length - 1];
};

exports.manager = new TableManager();