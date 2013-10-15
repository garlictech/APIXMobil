function Controller() {
    function TablePath(collection) {
        this.collection = collection;
        this.addSettingsChangedHandler(this.updateText);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "table_path";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.view = Ti.UI.createScrollView({
        top: 100,
        height: 26,
        showHorizontalScrollIndicator: true,
        id: "view"
    });
    $.__views.view && $.addTopLevelView($.__views.view);
    $.__views.label = Ti.UI.createLabel({
        color: "white",
        font: {
            fontWeight: "medium",
            fontSize: "12"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "label"
    });
    $.__views.view.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Utils = require("utils");
    TablePath.prototype = new (require("controller"))(arguments[0]);
    TablePath.prototype.updateText = function() {
        var text = "/";
        var parentNode = this.collection.parentNode;
        while (!Utils.undefined(parentNode)) {
            text = "/" + (Utils.undefined(parentNode.text_id) ? parentNode.text : Alloy.Globals.L(parentNode.text_id)) + text;
            Ti.API.trace("Text: " + text);
            parentNode = parentNode.parentNode;
        }
        $.label.text = text;
    };
    new TablePath(arguments[0].collection);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;