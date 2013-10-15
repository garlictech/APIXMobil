function TableManager() {}

TableManager.prototype.openChildTable = function(collection) {
    var controller = Alloy.createController(collection.viewControllerName, {
        collection: collection
    }).getView();
    Alloy.Globals.tabgroup.activeTab.open(controller);
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

TableManager.prototype.addTableView = function(controllerName, window, collection) {
    var view = Alloy.createController(controllerName, {
        window: window,
        collection: collection,
        controllerName: controllerName
    }).getView();
    window.add(view);
};

var tableManager = new TableManager();

module.exports = tableManager;