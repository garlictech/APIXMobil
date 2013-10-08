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

Alloy.Globals.L = require('locale').myL;

// Initialize models and collections

// Language
// Ti.App.Properties.setString("language", "EN");
// Config.changeLanguage();
// alert(Config.getLanguageText("login"));

// --------- TEST
//
// ----------------------------------------------------------------------------

function initDummyData(data, collection) {
    function addModel(data) {
        var model = Alloy.createModel("table_data", data);
        collection.add(model);
        // Save our model to the SQL database
        model.save(model);
    }

    collection.fetch();
    while(collection.length) {
        collection.at(0).destroy();
    }
    for (var i = 0; i < data.length; ++i) {
        addModel(data[i]);
    }
    // Finally, fetch the collection items
    collection.fetch();
}

// ----------------------------------------------------------------------------
// Alloy.Collections.location = Alloy.createCollection("table_data");

Alloy.Globals.locations = [
    {
        "text": "Budapest",
        "image": "images/db_icons/1.png",
        "child_collection": "sub_locations"
    },
    {
        "text": "Bánkút",
        "image": "images/db_icons/2.png",
        "child_collection": "sub_locations"
    }
];

// ----------------------------------------------------------------------------
Alloy.Globals.root_table = [
    {
        "text_id": "locations",
        "image": "images/locations.png",
        "child_collection": "locations"
    },
    {
        "text_id": "groups",
        "image": "images/locations.png",
        "child_collection": "groups"
    }
];

// ----------------------------------------------------------------------------
Alloy.Globals.sub_locations = [
    {
        text: "Bp, Budaörsi út",
        image: "images/db_icons/1.png",
        childCollection: "main_menu"
    },
    {
        text: "Bp, Honvéd utca",
        image: "images/db_icons/1.png",
        childCollection: "main_menu"
    }

];

// ----------------------------------------------------------------------------
Alloy.Globals.groups = [
    {
        text: "Nagy Csoport",
        "image": "images/locations.png"
    },
    {
        text: "Kis Csoport",
        "image": "images/locations.png"
    }
];

// ----------------------------------------------------------------------------
Alloy.Globals.ActualTableIndex = 0;

// Indicator od the actual table open. collection is the model of the collection, index is the collection ID.
Alloy.Globals.ActualTableDescriptor = {
    collection: Alloy.Globals.root_table,
    index: 0
};
