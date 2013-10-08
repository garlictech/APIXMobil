function initDummyData(data, collection) {
    function addModel(data) {
        var model = Alloy.createModel("table_data", data);
        collection.add(model);
        model.save(model);
    }
    collection.fetch();
    while (collection.length) collection.at(0).destroy();
    for (var i = 0; data.length > i; ++i) addModel(data[i]);
    collection.fetch();
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var Config = require("config");

Alloy.Globals.L = require("locale").myL;

Alloy.Globals.locations = [ {
    text: "Budapest",
    image: "images/db_icons/1.png",
    child_collection: "sub_locations"
}, {
    text: "Bánkút",
    image: "images/db_icons/2.png",
    child_collection: "sub_locations"
} ];

Alloy.Globals.root_table = [ {
    text_id: "locations",
    image: "images/locations.png",
    child_collection: "locations"
}, {
    text_id: "groups",
    image: "images/locations.png",
    child_collection: "groups"
} ];

Alloy.Globals.sub_locations = [ {
    text: "Bp, Budaörsi út",
    image: "images/db_icons/1.png",
    childCollection: "main_menu"
}, {
    text: "Bp, Honvéd utca",
    image: "images/db_icons/1.png",
    childCollection: "main_menu"
} ];

Alloy.Globals.groups = [ {
    text: "Nagy Csoport",
    image: "images/locations.png"
}, {
    text: "Kis Csoport",
    image: "images/locations.png"
} ];

Alloy.Globals.ActualTableIndex = 0;

Alloy.Globals.ActualTableDescriptor = {
    collection: Alloy.Globals.root_table,
    index: 0
};

Alloy.createController("index");