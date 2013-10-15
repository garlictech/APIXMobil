// ----------------------------------------------------------------------------
// Module initialization
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// TextInput class.
function TextInput(args) {
    WindowController.call(this, args, $, [$.top_label]);
    $.input.value = this.args.value;
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
TextInput.prototype = Object.create(WindowController.prototype);

// ----------------------------------------------------------------------------
// When done, call the passed function that handles the input value.
// Then closes the window properly.
TextInput.prototype.doneClicked = function() {
    this.args.useValue($.input.value);
    this.close();
};

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var textInput = new TextInput(arguments[0]);

// ----------------------------------------------------------------------------

function cancelClicked(e) {
    textInput.close();
}

// ----------------------------------------------------------------------------

function doneClicked(e) {
    textInput.doneClicked();
}
