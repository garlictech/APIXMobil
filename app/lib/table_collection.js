// ----------------------------------------------------------------------------
// Module initialization
var Utils = require("utils");

// ----------------------------------------------------------------------------
function TableCollection() {
    this.data = {};
}

// ----------------------------------------------------------------------------
// Return a table row, identified by its id. If it does not exists, fetch
// the data either form the server, or from locally. The method delegates
// fetching data to the children of this object. After fetch, the formatted
// data will be stored in this.data.
TableCollection.prototype.get = function(id) {
    if (Utils.undefined(this.data[id])) {
        this.fetch(id);
    }

    return this.data[id];
};

// ----------------------------------------------------------------------------
module.exports = TableCollection;
