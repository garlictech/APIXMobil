// ----------------------------------------------------------------------------
// Module initialization
var Controller = require("controller");
var Utils = require("utils");

// TableRow class.
//
// Argument parameters:
// args.window: the window that the row is displayed on
// args.model: the model instance of the collection that is in the row
function TableRow(args, row_ui, name_ui, value_ui) {
    this.model = args.model;
    var uis = [];
    // Query always return values in metric measures. App converts it accordingly.
    this.handleMeasure();
    name_ui.text = this.getTitle();

    if ( ! Utils.undefined(this.model.value) && ! Utils.undefined(value_ui)) {
        value_ui.text = Alloy.Globals.L(this.value);
    } else {
        name_ui.width = "100%";
    }

    Controller.call(this, args);

    if (this.hasChild()) {
        row_ui.hasChild = true;
        name_ui.width = "85%";
    }
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
TableRow.prototype = Object.create(Controller.prototype);

// ----------------------------------------------------------------------------
TableRow.prototype.openChildWindow = function() {
    if (this.hasChild()) {
        require("table_manager").openChildTable(this.model.childCollection);
    } else {
        var a = Titanium.UI.createAlertDialog({
            title: this.getTitle(),
            message: this.model.value
        });
        a.show();
    }
};

// ----------------------------------------------------------------------------
TableRow.prototype.getTitle = function() {
    var res;
    if (this.model.text) {
        res = this.model.text;
    } else if (this.model.text_id)  {
        res = Alloy.Globals.L(this.model.text_id);

        if (this.measure) {
            res += ", " + this.measure;
        }
    }

    return res;
};

// ----------------------------------------------------------------------------
TableRow.prototype.handleMeasure = function() {
    // Handle mass values
    var massLabels = ["kg"];
    this.value = this.model.value;

    if (massLabels.indexOf(this.model.text_id) != -1) {
        if (Utils.isMetric()) {
            this.measure = "kg";
        } else {
            this.measure = "lbs";
            this.value = (this.value / 0.45359).toFixed(5); // kg-lbs conversion
        }

        return;
    }

    // Handle volume values
    var volumeLabels = [];
    var volumeLabels15 = [];
    var suffixes = ["keszlet", "zarolt_l", "sLiter", "aLiter", "mLiter", "max_l", "liter"];
    var prefixes = ["", "benzin_", "diesel_", "jet_"];

    for (var prefix = 0;  prefix < prefixes.length; ++prefix) {
        for (var suffix = 0; suffix < suffixes.length; ++suffix) {
            var label = prefixes[prefix] + suffixes[suffix];
            volumeLabels.push(label);
            volumeLabels15.push(label + "15");
        }
    }

    if (volumeLabels.indexOf(this.model.text_id) != -1) {
        if (Utils.isMetric()) {
            this.measure = "liter";
        } else {
            this.measure = "gallon";
            this.value = (this.value / 3.75).toFixed(3); // liter-gallon conversion
        }

        return;
    }

    if (volumeLabels15.indexOf(this.model.text_id) != -1) {
        if (Utils.isMetric()) {
            this.measure = "liter, 15˚C";
        } else {
            this.measure = "gallon, 58˚F";
            this.value = (this.value / 3.75).toFixed(3); // liter-gallon conversion
        }

        return;
    }

    // Handle temperatures
    var temperatureLabels = ["hofok"];
    this.value = this.model.value;

    if (temperatureLabels.indexOf(this.model.text_id) != -1) {
        if (Utils.isMetric()) {
            this.measure = "˚C";
        } else {
            this.measure = "˚F";
            this.value = (this.value * 9 / 5 + 32).toFixed(1); // celsius-fahrenheit conversion
        }

        return;
    }
};

// ----------------------------------------------------------------------------
TableRow.prototype.hasChild = function() {
    return typeof this.model.childCollection !== 'undefined';
};

// ----------------------------------------------------------------------------
TableRow.prototype.handleMetric = function() {

}

// ----------------------------------------------------------------------------
module.exports = TableRow;

