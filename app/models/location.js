exports.definition = {
  config: {
      columns: {
          "name": "text",
          "icon_id": "integer"
      },
      adapter: {
          type: "sql",
          collection_name: "location"
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
