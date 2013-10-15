// Instantiate the root window content. It contains the generic ui elements
// only. As always, we pass the window parameter to the controller, and the
// collection that the table displays.

var rootTable = new (require("table_base"))({
    collection: new (require("root_table_collection"))(),
    controller: $
});
