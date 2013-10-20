// /---------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");
var QueriesCollection = require("queries_collection");

// ----------------------------------------------------------------------------
var set_1 = [
    ["Bp, Budaörsi út", "images/db_icons/1.png", "", "queries_collection"],
    ["Bp, Kerepesi út", "images/db_icons/1.png"]
];

var testData = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "sites",
    viewControllerName: "simple_table_view",
    text_id: false,
    testData: testData,
    id: "sites_table",
    refreshable: true
});
