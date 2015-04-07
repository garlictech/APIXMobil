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
var Utils = require('utils');

Alloy.Globals.L = locale.myL;
// Execute unit test suite
// if (Ti.App.deployType == 'test') {
//     require('specs/test_property');
//     require('specs/test_date_property');
//     require('specs/test_config');
//     require('specs/test_locale');
//     require('specs/test_utils');
//     require('behave').run('this');
// }

Alloy.Globals.collections = {};

// ----------------------------------------------------------------------------
function handleSettingChangedEvents(eventName) {
    var keysToRemove = [];
    // Look up collections sensitive to date change, and record them
    for (var key in Alloy.Globals.collections) {
        if (! Alloy.Globals.collections.hasOwnProperty(key)) {
            continue;
        }

        var signal = Alloy.Globals.collections[key].sensitiveTo;

        if ( ! Utils.undefined(signal) &&
             signal.indexOf(eventName) != -1
        ) {
            keysToRemove.push(key);
        }
    }

    for (key in keysToRemove) {
        delete Alloy.Globals.collections[keysToRemove[key]];
    }
}

// ----------------------------------------------------------------------------
Ti.App.addEventListener('DatesChanged', function() {
    handleSettingChangedEvents('DatesChanged');
});

// ----------------------------------------------------------------------------
Ti.App.addEventListener('MetricChanged', function() {
    alert(Alloy.Globals.L("metric_changed"));
    Ti.App.fireEvent("GoHome");
    handleSettingChangedEvents('MetricChanged');
});

// ----------------------------------------------------------------------------
Ti.Gesture.addEventListener('orientationchange',function(e) {
    var toHideBackground = (e.orientation === Titanium.UI.LANDSCAPE_LEFT || e.orientation === Titanium.UI.LANDSCAPE_RIGHT);

    if (e.orientation < 5) {
        Ti.App.fireEvent('orient', {toHideBackground: toHideBackground});
    }
});
