// ----------------------------------------------------------------------------
// Module initialization
var Config = require("config").config;
var utils = require("utils");
var validators = require("validators");

// ----------------------------------------------------------------------------
// Setting class.
function Setting() {
    $.title_label.text_id = this.args.title_id;
    $.title_label.text = Alloy.Globals.L(this.args.title_id);
    // This will trigger UI update. Ugly solution I know.
    $.setting.top = this.args.top || 0;

    if (typeof this.args.width !== 'undefined') {
        $.setting.width = this.args.width;
    }
    // Listen to the "SettingChanges" event. It simply updates the string
    // representation of the property that the view shows.
    this.addSettingsChangedHandler(this.updateValue);
}

// Inherits from Controller...
Setting.prototype = new (require("controller"))(
    arguments[0], [$.title_label]
);

// Read the actual value of the property that this setting is responsible for
Setting.prototype.updateValue = function() {
    $.setting_value.text =
        Alloy.Globals.L(Config.getProperty(this.args.propertyName).stringValue());
};

Setting.prototype.handleClick = function (initial, use, validator) {
    var self = this;
    var arg = {
        useValue: function(value) {
            if (eval("validators." + validator + "(value)")) {
                use(self.args.propertyName, value);
                self.updateValue();
            } else {
                alert(Alloy.Globals.L("illegal_value"));
            }
        },
        value: initial,
        validator: validator
    };

    utils.openWindowWithBottomClicksDisabled(this.args.controllerName, arg);
};

Setting.prototype.clickHandler = function() {
    var initial = Config.getProperty(this.args.propertyName).get();

    var validator = typeof this.args.validator !== 'undefined' ?
        this.args.validator : "ok";

    function use(n, v) {
        Config.getProperty(n).set(v);
    }

    this.handleClick(initial, use, validator);
};

// ----------------------------------------------------------------------------
// Create the object representing this particular setting
var setting = new Setting();

// Handling button click event
function onClick(e) {
    setting.clickHandler();
}
