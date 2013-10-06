exports.goToTables = function() {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
};

exports.goToSettings = function() {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.SETTINGS_TAB);
};

exports.goToInfo = function() {
    var controller = Alloy.createController("info").getView();
    controller.open();
};

exports.goToHome = function() {
    Ti.App.fireEvent("GoToHome");
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
};