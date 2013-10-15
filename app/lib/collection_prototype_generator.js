// ----------------------------------------------------------------------------
// Module initialization
var Utils = require("utils");

// ----------------------------------------------------------------------------
function CollectionPrototypeGenerator() {
    var args = arguments[0] || {};

    function Prototype(parentNode) {
        this.title_id = args.collectionTitleId;
        this.viewControllerName = args.viewControllerName;

        if (! Utils.undefined(parentNode)) {
            this.parentNode = parentNode;
        }
    }

    Prototype.prototype.refresh = function() {
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
                textParameter, image, childCollectionType, parentNode
            ) {
                if (args.text_id) {
                    this.text_id = textParameter;
                } else {
                    this.text = textParameter;
                }

                this.image = image;
                this.parentNode = self.parentNode;

                if ( ! Utils.undefined(childCollectionType)) {
                    // This is where the parent node inserts itself to the
                    // child collection
                    this.childCollection = new childCollectionType(this);
                }
            }

            construct.apply(this, pars);
        }

        this.data = [];

        for (var i = 0; i < args.data.length; ++i) {
            this.data[i] = new Node(args.data[i]);
        }
    };

    Prototype.prototype.getData = function() {
        if (Utils.undefined(this.data)) {
            this.refresh();
        }

        return this.data;
    };

    return Prototype;
}

// ----------------------------------------------------------------------------
module.exports = CollectionPrototypeGenerator;
