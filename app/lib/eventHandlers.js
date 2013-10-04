exports.goToTables = function(e) {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
};

exports.goToSettings = function(e) {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.SETTINGS_TAB);
};

exports.goToInfo = function(e) {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.INFO_TAB);
};

exports.goToHome = function(e) {
    Ti.App.fireEvent('GoToHome');
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
};
