// ----------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");
var SitesCollection = require("sites_collection");

// ----------------------------------------------------------------------------
var set_1 = [
    ["Budapest", "images/db_icons/1.png", undefined, SitesCollection],
    ["Bánkút", "images/db_icons/2.png"]
];

var data = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "places",
    viewControllerName: "simple_table_view",
    text_id: false,
    data: data,
    id: "places_table",
    refreshable: true
});
