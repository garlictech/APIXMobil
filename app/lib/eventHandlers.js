exports.goToTables = function(e) {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
};

exports.goToSettings = function(e) {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.SETTINGS_TAB);
};

exports.goToInfo = function(e) {
    var controller = Alloy.createController("info").getView();
    controller.open();
};

exports.goToHome = function(e) {
    Ti.App.fireEvent('GoToHome');
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
};
