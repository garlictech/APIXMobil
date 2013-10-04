exports.goToTables = function() {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
};

exports.goToSettings = function() {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.SETTINGS_TAB);
};

exports.goToInfo = function() {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.INFO_TAB);
};

exports.goToHome = function() {
    Ti.App.fireEvent("GoToHome");
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
};