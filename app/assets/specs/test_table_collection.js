// ----------------------------------------------------------------------------
require('behave').andSetup(this);
var TableCollection = require('table_collection');
var Utils = require("utils");

// ----------------------------------------------------------------------------
describe('Test table collection', function() {
    it ('*** Tests get', function() {
        // Create a test object inheriting from TestCollection
        function TestCollection () {}
        TestCollection.prototype = new TableCollection();

        TestCollection.prototype.fetch = function(id) {
            this.data[id] = "value";
        };

        var coll = new TestCollection();
        // data with given ID is not defined (fetched)
        expect(Utils.undefined(coll.data[1])).toBe(true);
        coll.get(1);
        expect(Utils.undefined(coll.data)).toBe(false);
        expect(coll.data[1]).toBe("value");
    });
});
