// ----------------------------------------------------------------------------
// Module initialization
var CollectionPrototypeGenerator = require("collection_prototype_generator");

// ----------------------------------------------------------------------------
var set_1 = [
    [undefined, "images/example.png"]
];

var data = [set_1];

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator({
    collectionTitleId: "image",
    viewControllerName: "image_view",
    text_id: false,
    data: data,
    id: "image_view"
});
