var defaults = require("defaults");

// Handling language and locale related operations: re-read locale file
// if language changes, notifies views to update labels.texts, etc.

// Variable storing the processed XML of translations
var _languageXml = "to set";
var _actualLocale = "to set";

// Detects if locale has changed. In case of it hasn't, it should not reread
// the locale file, etc.
function _hasLocaleChanged(locale) {
    return locale !== _actualLocale;
}

// According to the value of "Locale" property, it reads and processes
// the appropriate language file, and resets translation. When finished,
// it fires the locale"SettingsChanged" event.
exports.setTranslation = function() {
    Ti.API.trace("In locale.setTranslation");
    var locale = Ti.App.Properties.getString("Locale", defaults.LANGUAGE);

    if (! _hasLocaleChanged(locale) ) {
        Ti.API.trace("* Locale has not been changed.");
        return;
    }

    Ti.API.debug("Setting new translation...");
    var languageFile = String.format("locale/%s/strings.xml", locale);
    var file = Titanium.Filesystem.getFile(languageFile);
    var xmltext = file.read().toString();
    Ti.API.trace(String.format("* Language file %s loaded.", languageFile));
    _languageXml = Ti.XML.parseString(xmltext);
    Ti.API.trace(String.format("* Language file parsed, resulted %s.", _languageXml));
    // set locale only after successful XML processing
    Ti.API.info(String.format("locale.setTranslation: Locale has been changed from %s to %s", _actualLocale, locale));
    _actualLocale = locale;
    Ti.fireEvent("SettingsChanged");
};

// Returns the actual translation of the text id
exports.myL = function(key) {
    return _languageXml.getElementsByTagName(key).item(0).text;
};

// Return an array of supported locale descriptors.
exports.supportedLocales = {
    "en": "English",
    "hu": "Magyar",
    "es": "Espagnol"
};

// (re)initialize the module. Ensure that translation file is processed
// at least once.
exports.init = function() {
    exports.setTranslation();
};

Ti.API.debug("Initializing locale module...");
exports.init();
