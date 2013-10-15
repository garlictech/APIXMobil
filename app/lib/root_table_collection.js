// ----------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");
var PlacesCollection = require("places_collection");
var GroupsCollection = require("groups_collection");

// ----------------------------------------------------------------------------
var data = [
    ["places", "images/locations.png", PlacesCollection],
    ["groups", "images/locations.png", GroupsCollection]
];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "data",
    viewControllerName: "simple_table_view",
    text_id: true,
    data: data,
    id: "root_table"
});
