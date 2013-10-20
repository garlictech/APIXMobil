// ----------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");

// ----------------------------------------------------------------------------
var set_1 = [
    ["places", "images/locations.png", "", "places_collection"],
    ["groups", "images/locations.png", "", "groups_collection"]
];

var localData = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "data",
    viewControllerName: "simple_table_view",
    text_id: true,
    localData: localData,
    id: "root_table"
});
