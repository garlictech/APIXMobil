// /---------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");
var QueriesCollection = require("queries_collection");

// ----------------------------------------------------------------------------
var set_1 = [
    ["Bp, Budaörsi út", "images/db_icons/1.png", undefined, QueriesCollection],
    ["Bp, Kerepesi út", "images/db_icons/1.png"]
];

var data = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "sites",
    viewControllerName: "simple_table_view",
    text_id: false,
    data: data,
    id: "sites_table",
    refreshable: true
});
