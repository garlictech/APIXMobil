exports.definition = {
    config: {
        columns: {
            text_id: "text",
            text: "text",
            image: "text",
            child_collection: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "table_data"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("table_data", exports.definition, []);

collection = Alloy.C("table_data", exports.definition, model);

exports.Model = model;

exports.Collection = collection;