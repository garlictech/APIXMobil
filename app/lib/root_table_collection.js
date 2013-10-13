// ----------------------------------------------------------------------------
// Module initialization
var TableCollection = require("table_collection");

// ----------------------------------------------------------------------------
function RootTableCollection() {
    TableCollection.call(this);
}

// ----------------------------------------------------------------------------
RootTableCollection.prototype = Object.create(TableCollection.prototype);

// ----------------------------------------------------------------------------
RootTableCollection.prototype.fetch = function(id) {
    this.data = [
        {
            "text_id": "places",
            "image": "images/locations.png",
            "child_collection": "places"
        },
        {
            "text_id": "groups",
            "image": "images/locations.png",
            "child_collection": "groups"
        }
    ];
};

// ----------------------------------------------------------------------------
var rootTableCollection = new RootTableCollection();
module.exports = rootTableCollection;
