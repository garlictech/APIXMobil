function _hasLocaleChanged(locale) {
    return locale !== _actualLocale;
}

var defaults = require("defaults");

var _languageXml = "to set";

var _actualLocale = "to set";

exports.setTranslation = function() {
    Ti.API.trace("In locale.setTranslation");
    var locale = Ti.App.Properties.getString("Locale", defaults.LANGUAGE);
    if (!_hasLocaleChanged(locale)) {
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
    Ti.API.info(String.format("locale.setTranslation: Locale has been changed from %s to %s", _actualLocale, locale));
    _actualLocale = locale;
    Ti.fireEvent("SettingsChanged");
};

exports.myL = function(key) {
    return _languageXml.getElementsByTagName(key).item(0).text;
};

exports.supportedLocales = {
    en: "English",
    hu: "Magyar",
    es: "Espagnol"
};

exports.init = function() {
    exports.setTranslation();
};

Ti.API.debug("Initializing locale module...");

exports.init();