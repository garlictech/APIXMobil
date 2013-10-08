function Controller() {
    function IconRow() {
        "undefined" != typeof this.args.text && ($.row_name.text = this.args.text);
        "undefined" != typeof this.args.text_id && ($.row_name.text_id = this.args.text_id);
        $.icon.image = "undefined" != typeof this.args.icon_id ? String.format("images/db_icons/%d.png", this.args.icon_id) : this.args.image;
        this.hasChild() || ($.row.hasChild = false);
    }
    function openChildWindow() {
        iconrow.openChildWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "icon_row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        hasChild: true,
        height: 43,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    openChildWindow ? $.__views.row.addEventListener("click", openChildWindow) : __defers["$.__views.row!click!openChildWindow"] = true;
    $.__views.icon = Ti.UI.createImageView({
        left: 5,
        top: 2,
        height: 40,
        width: 40,
        id: "icon"
    });
    $.__views.row.add($.__views.icon);
    $.__views.row_name = Ti.UI.createLabel({
        left: 50,
        color: "#e9bf3c",
        id: "row_name"
    });
    $.__views.row.add($.__views.row_name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    IconRow.prototype = new (require("controller"))(arguments, [ $.row_name ]);
    IconRow.prototype.openChildWindow = function() {
        this.hasChild() && require("table_manager").manager.openChildTable(this.args.childWindow, this.args.child_collection);
    };
    IconRow.prototype.hasChild = function() {
        return "undefined" != typeof this.args.child_collection;
    };
    var iconrow = new IconRow();
    __defers["$.__views.row!click!openChildWindow"] && $.__views.row.addEventListener("click", openChildWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;