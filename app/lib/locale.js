// ----------------------------------------------------------------------------
// Module initialization
var Config = require("config").config;
var Utils = require("utils");
var _translations = "undefined"; // Variable storing the actual translation object
var _actualLocale = "undefined";

// ----------------------------------------------------------------------------
// Detects if locale has changed. In case of it hasn't, it should not reread
// the locale file, etc.
function _hasLocaleChanged(locale) {
    return locale !== _actualLocale;
}

// ----------------------------------------------------------------------------
// According to the value of "Locale" property, it reads and processes
// the appropriate language file, and resets translation. When finished,
// it fires the locale"SettingsChanged" event.
exports.setTranslation = function() {
    var loc = Config.getProperty("Locale").get();

    if (! _hasLocaleChanged(loc) ) {
        return;
    }

    Ti.API.debug("Setting new translation...");
    _translations = require(String.format("translations/%s/strings", loc)).translations;
    // set locale only after successful XML processing
    Ti.API.info(String.format("locale.setTranslation: Locale has been changed from %s to %s", _actualLocale, loc));
    _actualLocale = loc;
    Ti.App.fireEvent("SettingsChanged");
};

// ----------------------------------------------------------------------------
// Returns the actual translation of the text id
exports.myL = function(key) {
    if (Utils.undefined(key)) {
        return '(undefined)';
    }

    if (typeof key !== 'string') {
        return key;
    }

    var k = key.trim();
    var str = eval(String.format("_translations['%s']", k));
    return Utils.undefined(str) ? k : str;
};

// ----------------------------------------------------------------------------
// Return an array of supported locale descriptors.
exports.getSupportedLocales = function() {
    return ['en', 'hu', 'es'];
};

// ----------------------------------------------------------------------------// Return human representation of locale ID
exports.getHumanTextOfLocale = function(localeId) {
    switch(localeId) {
    case "en":
        return "English";
    case "hu":
        return "Magyar";
    case "es":
        return "Espagnol";
    default:
        throw("Unsupported locale");
    }
};

// ----------------------------------------------------------------------------
// (re)initialize the module. Ensure that translation file is processed
// at least once.
exports.init = function() {
    exports.setTranslation();
};

// ----------------------------------------------------------------------------
Ti.App.Properties.addEventListener('change', function(e) {
    exports.setTranslation();
});

// ----------------------------------------------------------------------------
exports.init();
