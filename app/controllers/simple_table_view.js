// Create a simple table view instance. It is a table with one "row" only,
// where columns are displayed as name-value rows.
//
// Module parameters:
//
// - arguments[0].collection: the collection that the table will display.
var simpleTable = new (require("simple_table"))({
    collection: arguments[0].collection,
    controller: $
});
