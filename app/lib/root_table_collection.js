// ----------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");
var PlacesCollection = require("places_collection");
var GroupsCollection = require("groups_collection");

// ----------------------------------------------------------------------------
var set_1 = [
    ["places", "images/locations.png", undefined, PlacesCollection],
    ["groups", "images/locations.png", undefined, GroupsCollection]
];

var localData = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "testData",
    viewControllerName: "simple_table_view",
    text_id: true,
    localData: localData,
    id: "root_table"
});
