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

var Config = require('config');

// Initialize models and collections
Alloy.Collections.location = Alloy.createCollection("location");

// Language
// Ti.App.Properties.setString("language", "EN");
// Config.changeLanguage();
// alert(Config.getLanguageText("login"));

// --------- TEST
var locations = Alloy.Collections.location;

function initDummyData() {
    function addModel(data) {
        var location = Alloy.createModel("location", data);
        locations.add(location);
        // Save our model to the SQL database
        location.save(location);
    }

    var data = [
        {
            "name": "Budapest",
            "icon_id": 1
        },
        {
            "name": "Bánkút",
            "icon_id": 2
        }
    ];

    locations.fetch();
    while(locations.length) {
        locations.at(0).destroy();
    }
    for (var i = 0; i < data.length; ++i) {
        addModel(data[i]);
    }
    // Finally, fetch the collection items
    locations.fetch();
}

initDummyData();
