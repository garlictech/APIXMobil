// ----------------------------------------------------------------------------
require('behave').andSetup(this);
var RootTableCollection = require('root_table_collection');
var Utils = require("utils");

// ----------------------------------------------------------------------------
describe('Test root table collection', function() {
    it ('*** Tests refresh', function() {
        var coll = new RootTableCollection();
        expect(Utils.undefined(coll.data)).toBe(true);
        var data = coll.getData();
        expect(Utils.undefined(data)).toBe(false);
        expect(coll.data[0].text_id).toBe("places");
        expect(coll.data[1].text_id).toBe("groups");
        expect(coll.title_id).toBe("data");
        expect(coll.view).toBe("simple_table_view");
        expect(Utils.undefined(coll.data[0].child)).toBe(false);
        expect(coll.data[0].child.view).toBe("simple_table_view");
        expect(coll.data[0].child.title_id).toBe("places");
        expect(Utils.undefined(coll.data[0].child.parentNode)).toBe(false);
    });
});
