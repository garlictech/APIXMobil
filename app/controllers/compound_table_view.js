// Create a simple table view instance. It is a table with one "row" only,
// where columns are displayed as name-value rows.
//
// Module parameters:
//
// - arguments[0].collection: the collection that the table will display.
var compoundTable = new (require("compound_table"))({
    collection: arguments[0].collection,
    controller: $
});
