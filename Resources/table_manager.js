function TableManager() {
    "undefined" === Alloy.Globals.ActualTableIndex && (Alloy.Globals.ActualTableIndex = 0);
}

TableManager.prototype.openChildTable = function(childWindow, childCollection) {
    Alloy.Globals.ActualTableIndex++;
    var controller = Alloy.createController(childWindow, {
        collectionName: childCollection
    }).getView();
    Alloy.Globals.tabgroup.activeTab.open(controller);
};

TableManager.prototype.isRootTable = function() {
    return 0 === Alloy.Globals.ActualTableIndex;
};

TableManager.prototype.closeTable = function(window) {
    Alloy.Globals.ActualTableIndex--;
    window.close();
};

exports.manager = new TableManager();