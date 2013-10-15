// ----------------------------------------------------------------------------
require('behave').andSetup(this);
var PlacesCollection = require('places_collection');
var TableCollection = require("table_collection").TableCollection;
var Utils = require("utils");

// ----------------------------------------------------------------------------
describe('Test places collection', function() {
    it ('*** Tests refresh', function() {
        function ParentCollection () {this.data = "value";}
        ParentCollection.prototype = new TableCollection();
        var coll = new PlacesCollection(new ParentCollection());
        expect(Utils.undefined(coll.data)).toBe(true);
        var data = coll.getData();
        expect(Utils.undefined(data)).toBe(false);
        expect(coll.data[0].text).toBe("Budapest");
        expect(coll.title_id).toBe("places");
        expect(coll.view).toBe("simple_table_view");
        expect(Utils.undefined(coll.child)).toBe(true);
        expect(Utils.undefined(coll.parentNode)).toBe(false);
        expect(coll.parentNode.data).toBe("value");
    });
});
