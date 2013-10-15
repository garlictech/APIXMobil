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

var data = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "data",
    viewControllerName: "simple_table_view",
    text_id: true,
    data: data,
    id: "root_table"
});
