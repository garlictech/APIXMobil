var Config = require('config');

function callback(args) {
    $.activity_logging_in.hide();
    alert(args.result + "Message: " + args.msg);
}

function doLogin(e) {
    $.activity_logging_in.show();
    Config.login($.username.getValue(), $.password.getValue(), callback);
}

$.activity_logging_in.hide();

// function doSetLanguage() {
//     console.debug("in set_language_button click event handler");
//     // load the set_language controller and call the index method
//     var setLanguageController = Alloy.createController('set_language');
//     // pass in the tab to give navigation and back button
//     setLanguageController.openMainWindow($.login);
// }
