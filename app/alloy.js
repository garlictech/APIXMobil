// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

var locale = require('locale');
Alloy.Globals.L = locale.myL;

// Execute unit test suite
// if (Ti.App.deployType == 'test') {
//     require('specs/test_property');
//     require('specs/test_date_property');
//     require('specs/test_config');
//     require('specs/test_webServiceClient');
//     require('specs/test_locale');
//     require('specs/test_utils');
//     require('specs/test_table_collection');
//     // require('specs/test_root_table_collection');
//     // require('specs/test_places_collection');
//     require('behave').run('this');
// }

Alloy.Globals.collections = {};

