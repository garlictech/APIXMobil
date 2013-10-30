// /---------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");
var ImageData = require("image_data");

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "card_details",
    viewControllerName: "compound_table_view",
    text_id: true,
    testData: [[]],
    id: "card_details_table",
    refreshable: true
});
