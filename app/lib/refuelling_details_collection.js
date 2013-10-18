// /---------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");
var ImageData = require("image_data");

// ----------------------------------------------------------------------------
var set_1 = [
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["diagram", undefined, "", ImageData],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
    ["detail", undefined, "value1"],
];

var set_2 = [
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["diagram", undefined, "", ImageData],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
    ["detail", undefined, "value2"],
];

var set_3 = [
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["diagram", undefined, "", ImageData],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
    ["detail", undefined, "value3"],
];

var testData = [set_1, set_2, set_3];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "refuelling_details",
    viewControllerName: "compound_table_view",
    text_id: true,
    testData: testData,
    id: "refuelling_details_table",
    refreshable: true
});
