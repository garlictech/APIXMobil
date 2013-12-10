// ----------------------------------------------------------------------------
function DataTable(rows, window, view, top) {
    this.window = window;
    this.view = view;
    this.table = Alloy.createController("data_table").getView();
    var height = 0;

    for(var i = 0; i < rows.length; i++) {
        height += this.addRow(rows[i]);
    }

    this.table.height = height;
    this.table.top = top;
    this.view.add(this.table);
}

// ----------------------------------------------------------------------------
DataTable.prototype.addRow = function(row) {
    var rowControllerName = typeof row.image !== 'undefined' ?
        "icon_row" : "text_row";

    var args = {
        window: this.window,
        model: row
    };

    var tableRow = Alloy.createController(rowControllerName, args).getView();
    this.table.appendRow(tableRow);
    return tableRow.height;
};

// ----------------------------------------------------------------------------
DataTable.prototype.deleteTable = function() {
    this.view.remove(this.table);
};

// ----------------------------------------------------------------------------
function Manager(window, view) {
    this.gap = 20;
    this.tables = [];
    this.window = window;
    this.view = view;
}

// ----------------------------------------------------------------------------
Manager.prototype.createTables = function(dataSet) {
    var rows = [];
    var top = 0;

    for (var i = 0; i < dataSet.length; i++) {
        if (dataSet[i].text_id === "new_section") {
            var table = new DataTable(rows, this.window, this.view, top);
            top += table.table.height + this.gap;
            this.tables.push(table);
            rows = [];
        } else {
            rows.push(dataSet[i]);
        }
    }

    if (rows.length > 0) {
        this.tables.push(new DataTable(rows, this.window, this.view, top));
    }
};

// ----------------------------------------------------------------------------
Manager.prototype.deleteAllTables = function() {
    for (var i = 0; i < this.tables.length; i++) {
        this.tables[i].deleteTable();
    }

    this.tables = [];
};

// ----------------------------------------------------------------------------
exports.Manager = Manager;
