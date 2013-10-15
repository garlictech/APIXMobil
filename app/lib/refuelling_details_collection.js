// /---------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");

// ----------------------------------------------------------------------------
var set_1 = [
    ["details", undefined, "value1"],
    ["details", undefined, "value1"],
    ["details", undefined, "value1"],
    ["details", undefined, "value1"]
];

var data = [set_1, set_1, set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "refuelling_details",
    viewControllerName: "simple_table_view",
    text_id: true,
    data: data,
    id: "refuelling_details_table",
    refreshable: true
});
