function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: "30",
        hasDetail: true,
        borderColor: "#e9bf3c",
        id: "row",
        rowId: "1",
        rowTitle: "",
        value: ""
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.title = Ti.UI.createLabel({
        height: "auto",
        width: "25%",
        left: 5,
        textAlign: "left",
        id: "title"
    });
    $.__views.row.add($.__views.title);
    $.__views.value = Ti.UI.createLabel({
        height: "auto",
        width: "70%",
        textAlign: "right",
        right: 5,
        ellipsize: true,
        color: "blue",
        id: "value"
    });
    $.__views.row.add($.__views.value);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.rowId = args.rowId;
    $.row.rowTitle = args.title || "Undefined";
    $.row.value = args.value || "Undefined";
    $.title.text = args.title || "Undefined";
    $.value.text = args.value || "Undefined";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;