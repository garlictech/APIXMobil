var Config = require('config').config;

// Save the index tabGroup as a global object. Reason: we do not use
// built-in tab navigation, we use other buttons and event listerners.
// So, the controllers of the individual tabs must be able to access
// the whole tabgroup, to be able to refer to the other tabs.
Alloy.Globals.tabgroup = $.index;
Alloy.Globals.LOGIN_TAB = 0;
Alloy.Globals.TABLES_TAB = 1;
Alloy.Globals.SETTINGS_TAB = 2;
Alloy.Globals.INFO_TAB = 3;

var activeTab = Config.isLoggedIn() ? Alloy.Globals.TABLES_TAB : Alloy.Globals.LOGIN_TAB;

$.index.setActiveTab(activeTab);
$.index.open();
