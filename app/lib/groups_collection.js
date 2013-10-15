// ----------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");

// ----------------------------------------------------------------------------
var data = [
    ["Nagy Csoport", "images/db_icons/1.png"],
    ["Kis Csoport", "images/db_icons/2.png"]
];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "groups",
    viewControllerName: "simple_table_view",
    text_id: false,
    data: data,
    id: "groups_table"
});
