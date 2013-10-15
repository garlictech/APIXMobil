// ----------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");
var SitesCollection = require("sites_collection");

// ----------------------------------------------------------------------------
var data = [
    ["Budapest", "images/db_icons/1.png", SitesCollection],
    ["Bánkút", "images/db_icons/2.png"]
];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "places",
    viewControllerName: "simple_table_view",
    text_id: false,
    data: data
});
