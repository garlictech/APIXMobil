if (Ti.App.deployType == 'test') {
    require('specs/test_config');
    require('specs/test_webServiceClient');
    require('behave').run('this');
}

var Config = require('config');

// Save the index tabGroup as a global object. Reason: we do not use
// built-in tab navigation, we use other buttons and event listerners.
// So, the controllers of the individual tabs must be able to access
// the whole tabgroup, to be able to refer to the other tabs.
Alloy.Globals.tabgroup = $.index;
Alloy.Globals.LOGIN_TAB = 0;
Alloy.Globals.TABLES_TAB = 1;
Alloy.Globals.INFO_TAB = 2;

$.index.setActiveTab(Alloy.Globals.LOGIN_TAB);
$.index.open();
//if (! Config.isLoggedIn()) {
//     var loginController = Alloy.createController('login');
//     //var loginController = Alloy.createController('tables');
// } else {
//     $.index.open();
// }
