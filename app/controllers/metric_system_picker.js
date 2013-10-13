// ----------------------------------------------------------------------------
// Module initialization
exports.baseController = "picker";

// ----------------------------------------------------------------------------
// MetricSystemPicker object.
function MetricSystemPicker() {
    // Create picker rows
    var data = [Alloy.Globals.L("metric"), "US"];
    var rowData = [];
    var actualRow = 0;
    var self = this;

    for (var i = 0; i < data.length; ++i) {
        rowData[i] = Ti.UI.createPickerRow({
            title: data[i]
        });

        if (data[i] === require("config").config.getProperty("MetricSystem").get())
        {
            actualRow = i;
        }
    }

    // Add rows to picker
    $.picker.add(rowData);
    // Set selected data to actual locale
    $.picker.setSelectedRow(0, actualRow);

    // On change, share the value of the picker with the base controller, by
    // using args.value.
    $.picker.addEventListener('change', function(e) {
        self.args.value = data[e.rowIndex];
    });
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
MetricSystemPicker.prototype = new (require("controller"))(arguments);

// ----------------------------------------------------------------------------
// Create the object representing this particular setting
var metricSystemPicker = new MetricSystemPicker();
