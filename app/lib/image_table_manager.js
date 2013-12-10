// // ----------------------------------------------------------------------------
// function DataTable(rows, window, view, top) {
//     this.window = window;
//     this.view = view;
//     this.table = Alloy.createController("data_table").getView();
//     var height = 0;

//     for(var i = 0; i < rows.length; i++) {
//         height += this.addRow(rows[i]);
//     }

//     this.table.height = height;
//     this.table.top = top;
//     this.view.add(this.table);
// }

// // ----------------------------------------------------------------------------
// DataTable.prototype.addRow = function(row) {
//     var rowControllerName = typeof row.image !== 'undefined' ?
//         "icon_row" : "text_row";

//     var args = {
//         window: this.window,
//         model: row
//     };

//     var tableRow = Alloy.createController(rowControllerName, args).getView();
//     this.table.appendRow(tableRow);
//     return tableRow.height;
// };

// // ----------------------------------------------------------------------------
// DataTable.prototype.deleteTable = function() {
//     this.view.remove(this.table);
// };

// ----------------------------------------------------------------------------
// function Manager(window, view) {
function Manager(imageView) {
    this.imageView = imageView;
}

// ----------------------------------------------------------------------------
Manager.prototype.createTables = function(dataSet) {
    this.imageView.image = Ti.Utils.base64decode(dataSet[0].image);
};

// ----------------------------------------------------------------------------
Manager.prototype.deleteAllTables = function() {

};

// ----------------------------------------------------------------------------
exports.Manager = Manager;
