// /---------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");

// ----------------------------------------------------------------------------
var data = [
    ["Bp, Budaörsi út", "images/db_icons/1.png"],
    ["Bánkút", "images/db_icons/1.png"]
];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "sites",
    viewControllerName: "simple_table_view",
    text_id: false,
    data: data
});
