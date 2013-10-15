// ----------------------------------------------------------------------------
// Module initialization
var Utils = require("utils");

// ----------------------------------------------------------------------------
function TableCollectionNode(childCollectionType, parentNode) {
    if ( ! Utils.undefined(childCollectionType)) {
        this.child = new childCollectionType(parentNode);
    }
}

// ----------------------------------------------------------------------------
function TableCollection(parentNode) {
    if (! Utils.undefined(parentNode)) {
        this.parentNode = parentNode;
    }
}

// ----------------------------------------------------------------------------
TableCollection.prototype.getData = function() {
    if (Utils.undefined(this.data)) {
        this.refresh();
    }

    return this.data;
};

// ----------------------------------------------------------------------------
module.exports.TableCollection = TableCollection;
module.exports.TableCollectionNode = TableCollectionNode;
