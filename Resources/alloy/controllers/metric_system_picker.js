function Controller() {
    function MetricSystemPicker() {
        var data = [ Alloy.Globals.L("metric"), "US" ];
        var rowData = [];
        var actualRow = 0;
        var self = this;
        for (var i = 0; data.length > i; ++i) {
            rowData[i] = Ti.UI.createPickerRow({
                title: data[i]
            });
            data[i] === require("config").config.getProperty("MetricSystem").get() && (actualRow = i);
        }
        $.picker.add(rowData);
        $.picker.setSelectedRow(0, actualRow);
        $.picker.addEventListener("change", function(e) {
            self.args.value = data[e.rowIndex];
        });
    }
    require("alloy/controllers/picker").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "metric_system_picker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.baseController = "picker";
    MetricSystemPicker.prototype = new (require("controller"))(arguments);
    new MetricSystemPicker();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;