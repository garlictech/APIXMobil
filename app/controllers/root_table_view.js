// Instantiate the root window content. It contains the generic ui elements
// only. As always, we pass the window parameter to the controller, and the
// collection that the table displays.
var CollectionPrototypeGenerator = require("collection_prototype_generator");

var rootTable = new (require("table_base"))({
    collection: new (CollectionPrototypeGenerator({
        viewControllerName: "root_table_view",
        _id: "root_table"
    }))(),
    controller: $
});
