// ----------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");

// ----------------------------------------------------------------------------
var set_1 = [
    ["Budapest", "images/db_icons/1.png", "", "sites_collection"],
    ["Bánkút", "images/db_icons/2.png"]
];

var testData = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "places",
    viewControllerName: "simple_table_view",
    text_id: false,
    testData: testData,
    id: "places_table",
    refreshable: true
});
