// Create an image table view instance. It is a table with one "row" only,
// displaying a diagram.
//
// Module parameters:
//
// - arguments[0].collection: the collection that the table will display.
// The collection in this case, is a single image.
var imageTable = new (require("image_table"))({
    collection: arguments[0].collection,
    controller: $
});
