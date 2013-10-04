exports.definition = {
    config: {
        columns: {
            name: "text",
            icon_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "location"
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

model = Alloy.M("location", exports.definition, []);

collection = Alloy.C("location", exports.definition, model);

exports.Model = model;

exports.Collection = collection;