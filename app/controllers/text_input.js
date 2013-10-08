// ----------------------------------------------------------------------------
// Module initialization
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// TextInput class.
function TextInput(args, uiElements) {
    WindowController.call(this, args, uiElements, $.window, $);
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
var textInput = new TextInput(arguments, [$.top_label]);

// ----------------------------------------------------------------------------

function cancelClicked(e) {
    textInput.close();
}

// ----------------------------------------------------------------------------

function doneClicked(e) {
    textInput.doneClicked();
}
