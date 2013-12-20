// ----------------------------------------------------------------------------
// Module initialization
var Utils = require("utils");
var Config = require("config").config;
var WebServiceClient = require("web_service_client");

// ----------------------------------------------------------------------------
function CollectionPrototypeGenerator() {
    var args = arguments[0] || {};

    function Prototype(parentNode) {
        this.setIndex = 0;
        this._id = args._id;
        this.viewControllerName = args.viewControllerName;

        if (! Utils.undefined(parentNode)) {
            this.parentNode = parentNode;
        }

        Alloy.Globals.collections[this.id()] = this;
    }

    Prototype.prototype.id = function() {
        return this._id;
    };

    Prototype.prototype.reset = function() {
        delete this.data;
    };

    Prototype.prototype.refresh = function(callbacks) {
        var self = this;

        WebServiceClient.getCollection(this, {
            on_error: callbacks.on_error,

            on_success: function(data) {
                self.fillDescriptors(data.desc);
                self.buildLocalDataStructure(data.data);
                Alloy.Globals.collections[self.id()] = self;
                callbacks.on_success(self.data);
            }
        });
    };

    Prototype.prototype.setValue = function(attribute) {
        if ( !(Utils.undefined(attribute) || String(attribute).length === 0)) {
            return attribute;
        }
    };

    Prototype.prototype.fillDescriptors = function(desc) {
        Utils.merge(this, desc);
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
                textParameter, image, value, childCollectionId, childViewControllerName
            ) {
                if (self.text_id) {
                    this.text_id = textParameter;
                } else {
                    this.text = textParameter;
                }

                this.parentNode = self.parentNode;
                this.value = self.setValue(value);
                this.image = self.setValue(image);

                var isUndef = Utils.undefined(childCollectionId) ||
                    childCollectionId === '';

                if ( ! isUndef) {
                    // This is where the parent node inserts itself to the
                    // child collection
                    var str = String.format("this.childCollection = new (CollectionPrototypeGenerator({_id: '%s', viewControllerName: '%s'}))(this)", childCollectionId, childViewControllerName);

                    eval(str);
                }
            }

            construct.apply(this, pars);
        }

        this.data = [];

        for (var j = 0; j < data.length; ++j) {
            var subset = [];
            // In compound case, we create two extra rows: total number of
            // sets, and the actually displayed set. We step sets with the
            // arrows of the compound windows.
            //if (data.length > 1) {
            if (this.viewControllerName === "compound_table_view") {
                subset.push(new Node(["total_data", undefined, data.length ]));
                subset.push(new Node(["actual_data", undefined, j + 1]));
                subset.push(new Node(["new_section", undefined, undefined]));
            }

            for (var i = 0; i < data[j].length; ++i) {
                subset.push(new Node(data[j][i]));
            }

            this.data.push(subset);
        }

        this.setIndex = 0;
    };

    Prototype.prototype.getData = function(callbacks) {
        if (Utils.undefined(this.data)) {
            this.refresh(callbacks);
        } else {
            callbacks.on_success(this.data);
        }
    };

    Prototype.prototype.increaseSetIndex = function() {
        this.setIndex++;
        if (this.setIndex >= this.data.length) {
            this.setIndex = 0;
        }
    };

    Prototype.prototype.decreaseSetIndex = function() {
        this.setIndex--;
        if (this.setIndex < 0) {
            this.setIndex = this.data.length - 1;
        }
    };

    return Prototype;
}

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator;
