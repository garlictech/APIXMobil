// ----------------------------------------------------------------------------
// Module initialization
var Utils = require("utils");

// ----------------------------------------------------------------------------
function CollectionPrototypeGenerator() {
    var args = arguments[0] || {};

    function Prototype(parentNode) {
        this.title_id = args.collectionTitleId;
        this.viewControllerName = args.viewControllerName;
        this.setIndex = 0;

        if (! Utils.undefined(parentNode)) {
            this.parentNode = parentNode;
        }

        Alloy.Globals.collections[args.id] = this;
    }

    Prototype.prototype.id = function() {
        return args.id;
    };

    Prototype.prototype.dummyRefresh = function() {
        if (! Utils.undefined(this.data[0].value)) {
            this.data[0].value += " x";
        } else if (! Utils.undefined(this.data[0].text)) {
            this.data[0].text += " x";
        }
    };

    Prototype.prototype.refreshable = function() {
        return (! Utils.undefined(args.refreshable)) && args.refreshable;
    };

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
                textParameter, image, value, childCollectionType
            ) {
                if (args.text_id) {
                    this.text_id = textParameter;
                } else {
                    this.text = textParameter;
                }

                this.image = image;
                this.parentNode = self.parentNode;
                this.value = value;

                if ( ! Utils.undefined(childCollectionType)) {
                    // This is where the parent node inserts itself to the
                    // child collection
                    this.childCollection = new childCollectionType(this);
                }
            }

            construct.apply(this, pars);
        }

        this.data = [];

        // In compound case, we create two extra rows: total number of
        // sets, and the actually displayed set. We step sets with the
        // arrows of the compound windows.
        if (args.data.length > 1) {
            this.data.push(new Node(["total_data", undefined, args.data.length ]));

            this.data.push(new Node(["actual_data", undefined, this.setIndex + 1]));
        }

        for (var i = 0; i < args.data[this.setIndex].length; ++i) {
            this.data.push(new Node(args.data[this.setIndex][i]));
        }
    };

    Prototype.prototype.getData = function() {
        if (Utils.undefined(this.data)) {
            this.refresh();
        }

        return this.data;
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
