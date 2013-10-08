exports.definition = {
  config: {
      columns: {
          "text_id": "text",
          "text": "text",
          "image": "text",
          "child_collection": "text"
      },
      adapter: {
          type: "sql",
          collection_name: "table_data"
      }
  },
  extendModel: function(Model) {
      _.extend(Model.prototype, {
          // extended functions and properties go here
      });

      return Model;
  },

   extendCollection: function(Collection) {
      _.extend(Collection.prototype, {
          // extended functions and properties go here
      });

      return Collection;
  }
};
