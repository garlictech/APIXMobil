// ----------------------------------------------------------------------------
require('behave').andSetup(this);
var TableCollection = require('table_collection').TableCollection;
var TableCollectionNode = require('table_collection').TableCollectionNode;
var Utils = require("utils");

// ----------------------------------------------------------------------------
describe('Test table collection', function() {
    it ('*** Tests TableCollectionNode', function() {
        function Collection() {this.key = "value";}
        var node1 = new TableCollectionNode();
        expect(Utils.undefined(node1.child)).toBe(true);
        var node2 = new TableCollectionNode(Collection);
        expect(node2.child.key).toBe("value");
    });

    it ('*** Tests getData', function() {
        // Create a test object inheriting from TestCollection
        function TestCollection () {}
        TestCollection.prototype = new TableCollection();

        TestCollection.prototype.refresh = function() {
            this.data = ["value"];
        };

        var coll = new TestCollection();
        // data with given ID is not defined (fetched)
        expect(Utils.undefined(coll.data)).toBe(true);
        var data = coll.getData();
        expect(Utils.undefined(coll.data)).toBe(false);
        expect(coll.data[0]).toBe("value");
        expect(data[0]).toBe("value");
    });

    it ('*** Tests construction with parent', function() {
        var coll1 = new TableCollection();
        expect(Utils.undefined(coll1.parent)).toBe(true);
        var coll2 = new TableCollection("parent");
        expect(coll2.parent).toBe("parent");
    });
});
