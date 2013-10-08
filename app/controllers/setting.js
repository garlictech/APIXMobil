// ----------------------------------------------------------------------------
// Module initialization
var Config = require("config");
var utils = require("utils");

// ----------------------------------------------------------------------------
// Setting class.
function Setting() {
    $.title_label.text_id = this.args.title_id;
    $.setting.top = this.args.top || 0;

    if (typeof this.args.width !== 'undefined') {
        $.setting.width = this.args.width;
    }
    // Listen to the "SettingChanges" event. It simply updates the string
    // representation of the property that the view shows.
    this.addSettingsChangedHandler(this.updateValue);
}

// Inherits from Controller...
Setting.prototype = new (require("controller"))(arguments, [$.title_label]);

// Read the actual value of the property that this setting is responsible for
Setting.prototype.updateValue = function() {
    $.setting_value.text = Config.getStringOfSetting(this.args.propertyName);
};

Setting.prototype.addSettingChangeEvent = function (initial, use) {
    var self = this;
    var arg = {
        useValue: function(value) {
            use(self.args.propertyName, value);
            Ti.App.fireEvent('SettingsChanged');
        },
        value: initial
    };

    //Alloy.createController(this.args.controllerName, arg).getView().open();

    utils.openWindowWithBottomClicksDisabled(this.args.controllerName, arg);
};

Setting.prototype.clickHandler = function() {
    var initial = Config.getProperty(this.args.propertyName);

    function use(n, v) {
        Config.setProperty(n, v);
    }

    this.addSettingChangeEvent(initial, use);
};

// ----------------------------------------------------------------------------
// Create the object representing this particular setting
var setting = new Setting();

// Handling button click event
function onClick(e) {
    setting.clickHandler();
}
