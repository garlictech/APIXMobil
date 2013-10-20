// /---------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");
var ImageData = require("image_data");

// ----------------------------------------------------------------------------
var set_1 = [
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["diagram", "", "", "image_data"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
    ["detail", "", "value1"],
];

var set_2 = [
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["diagram", "", "", "image_data"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
    ["detail", "", "value2"],
];

var set_3 = [
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["diagram", "", "", "image_data"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
    ["detail", "", "value3"],
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
