// ----------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");

// ----------------------------------------------------------------------------
var set_1 = [
    ["Nagy Csoport", "images/db_icons/1.png"],
    ["Kis Csoport", "images/db_icons/2.png"]
];

var testData = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "groups",
    viewControllerName: "simple_table_view",
    text_id: false,
    refreshable: true,
    testData: testData,
    id: "groups_table"
});
