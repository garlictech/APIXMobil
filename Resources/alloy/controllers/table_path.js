function Controller() {
    function TablePath() {
        this.endOfPath = this.args.path.length;
        var self = this;
        this.addSettingsChangedHandler(function() {
            self.updateText();
        });
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
        text: "/",
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
    TablePath.prototype = new (require("controller"))(arguments);
    TablePath.prototype.updateText = function() {
        var text = "/";
        for (var i = 1; Math.min(this.endOfPath, this.args.path.length) > i; ++i) {
            var locator = this.args.path[i];
            text += ("undefined" == typeof locator.text_id ? locator.text : Alloy.Globals.L(locator.text_id)) + "/";
        }
        $.label.text = text;
    };
    new TablePath();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;