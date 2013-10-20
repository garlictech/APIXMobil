// ----------------------------------------------------------------------------
// Module initialization
var Utils = require("utils");
var Config = require("config").config;
var DataRetriever = require("data_retriever");

// ----------------------------------------------------------------------------
function CollectionPrototypeGenerator() {
    var args = arguments[0] || {};

    function Prototype(parentNode) {
        this.title_id = args.collectionTitleId;
        this.viewControllerName = args.viewControllerName;
        this.setIndex = 0;

        if (! Utils.undefined(args.testData)) {
            this.testData = args.testData;
        }

        if (! Utils.undefined(args.localData)) {
            this.localData = args.localData;
        }

        if (! Utils.undefined(parentNode)) {
            this.parentNode = parentNode;
        }

        Alloy.Globals.collections[args.id] = this;
    }

    Prototype.prototype.id = function() {
        return args.id;
    };

    Prototype.prototype.refreshable = function() {
        return (! Utils.undefined(args.refreshable)) && args.refreshable;
    };

    Prototype.prototype.reset = function() {
        delete this.data;
    };

    Prototype.prototype.refresh = function(callbacks) {
        var self = this;
        // localData has preference over remote data. If a collection defines
        // local data, it means that no need to fetch it from the remote
        // server. Good for menu-like tables, like root table, refuelling
        // details.
        // We pass test data as well, in test mode, it will be returned instead
        // of fetching from server.
        if (! Utils.undefined(this.localData)) {
            self.buildLocalDataStructure(this.localData);
            callbacks.on_success(this.data);
            return;
        } else if (Config.getProperty("ServerName").get() === "test") {
            self.buildLocalDataStructure(this.testData);
            callbacks.on_success(this.data);
            return;
        } else {
            DataRetriever.get(this, {
                on_error: callbacks.on_error,

                on_success: function(data) {
                    self.buildLocalDataStructure(data);
                    callbacks.on_success(self.data);
                }
            });
        }
    };

    Prototype.prototype.setValue = function(attribute) {
        if ( !(Utils.undefined(attribute) || attribute.length === 0)) {
            return attribute;
        }
    };

    Prototype.prototype.buildLocalDataStructure = function(data) {
        var self = this;
        // Creates a node. The node will be the model if the table row.
        // Attributes:
        //
        // Node.text: text parameter of the row
        // Node.text_id: text id parameter of the row
        // Node.child: child collection of the node
        // Node.image: image parameter of the row. If it is defined, the
        // row will be displayed as icon_row.
        function Node(pars) {
            function construct(
                textParameter, image, value, childCollectionType
            ) {
                if (args.text_id) {
                    this.text_id = textParameter;
                } else {
                    this.text = textParameter;
                }

                this.parentNode = self.parentNode;
                this.value = self.setValue(value);
                this.image = self.setValue(image);

                var isUndef = Utils.undefined(childCollectionType) ||
                    childCollectionType === '';

                if ( ! isUndef) {
                    // This is where the parent node inserts itself to the
                    // child collection
                    var str = String.format("this.childCollection = new (require('%s'))(this);", childCollectionType);
                    eval(str);
                }
            }

            construct.apply(this, pars);
        }

        this.data = [];
        // In compound case, we create two extra rows: total number of
        // sets, and the actually displayed set. We step sets with the
        // arrows of the compound windows.
        if (data.length > 1) {
            this.data.push(new Node(["total_data", undefined, data.length ]));

            this.data.push(new Node(["actual_data", undefined, this.setIndex + 1]));
        }

        for (var i = 0; i < data[this.setIndex].length; ++i) {
            this.data.push(new Node(data[this.setIndex][i]));
        }

        Ti.App.fireEvent("SettingsChanged");
    };

    Prototype.prototype.getData = function(callbacks) {
        if (Utils.undefined(this.data)) {
            this.refresh(callbacks);
        }
    };

    Prototype.prototype.increaseSetIndex = function() {
        this.setIndex++;
        if (this.setIndex >= args.data.length) {
            this.setIndex = 0;
        }

        this.refresh();
    };

    Prototype.prototype.decreaseSetIndex = function() {
        this.setIndex--;
        if (this.setIndex < 0) {
            this.setIndex = args.data.length - 1;
        }

        this.refresh();
    };

    return Prototype;
}

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator;
