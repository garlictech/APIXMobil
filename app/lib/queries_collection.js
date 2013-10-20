// /---------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");

//require("refuelling_details_collection")
// ----------------------------------------------------------------------------
var set_1 = [
    ["refuelling_details", "", "", "refuelling_details_collection"],
    ["refuelling_summary"],
    ["card_details"],
    ["card_summary"],
    ["tank_details"],
    ["tank_diagram"],
    ["tank_summary"],
    ["controller_details"],
    ["controller_summary"],
    ["vapour_data"]
];

var localData = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "queries",
    viewControllerName: "simple_table_view",
    text_id: true,
    localData: localData,
    id: "queries_table",
    refreshable: false
});
