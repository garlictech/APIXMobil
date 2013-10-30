// /---------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");
var ImageData = require("image_data");

// ----------------------------------------------------------------------------
var set_1 = [
    ["date", "", "2013.10.27 12:42"],
    ["controller_name", "", "name"],
    ["nozzle_number", "", "2"],
    ["fuelgas_suction", "", "78"],
    ["errorneous_suction", "", "78"],
    ["counter_before_stop", "", "45"]
];

var testData = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "fuelgas_data",
    viewControllerName: "simple_table_view",
    text_id: true,
    testData: testData,
    id: "fuelgas_table",
    refreshable: true
});
