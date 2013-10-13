function Controller() {
    function TextRow() {}
    function openChildWindow() {
        textRow.openChildWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "text_row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        hasChild: false,
        height: 23,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    openChildWindow ? $.__views.row.addEventListener("click", openChildWindow) : __defers["$.__views.row!click!openChildWindow"] = true;
    $.__views.name = Ti.UI.createLabel({
        left: 5,
        color: "#e9bf3c",
        id: "name"
    });
    $.__views.row.add($.__views.name);
    $.__views.value = Ti.UI.createLabel({
        left: 150,
        color: "#e9bf3c",
        id: "value"
    });
    $.__views.row.add($.__views.value);
    exports.destroy = function() {};
    _.extend($, $.__views);
    TextRow.prototype = new (require("table_row"))(arguments, $.row, $.name);
    var textRow = new TextRow();
    __defers["$.__views.row!click!openChildWindow"] && $.__views.row.addEventListener("click", openChildWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;