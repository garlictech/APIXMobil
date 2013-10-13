// ----------------------------------------------------------------------------
require('behave').andSetup(this);
var RootTableCollection = require('root_table_collection');

// ----------------------------------------------------------------------------
describe('Test root table collection', function() {
    it ('*** Tests fetch', function() {
        RootTableCollection.fetch(0);
        expect(RootTableCollection.data[0].text_id).toBe("places");
        expect(RootTableCollection.data[1].text_id).toBe("groups");
    });
});
