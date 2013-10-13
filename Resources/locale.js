function _hasLocaleChanged(locale) {
    return locale !== _actualLocale;
}

var Config = require("config").config;

var _translations = "undefined";

var _actualLocale = "undefined";

exports.setTranslation = function() {
    var loc = Config.getProperty("Locale").get();
    if (!_hasLocaleChanged(loc)) {
        Ti.API.trace("* Locale has not been changed.");
        return;
    }
    Ti.API.debug("Setting new translation...");
    _translations = require(String.format("translations/%s/strings", loc)).translations;
    Ti.API.info(String.format("locale.setTranslation: Locale has been changed from %s to %s", _actualLocale, loc));
    _actualLocale = loc;
    Ti.App.fireEvent("SettingsChanged");
};

exports.myL = function(key) {
    return eval("_translations." + key);
};

exports.getSupportedLocales = function() {
    return [ "en", "hu", "es" ];
};

exports.getHumanTextOfLocale = function(localeId) {
    switch (localeId) {
      case "en":
        return "English";

      case "hu":
        return "Magyar";

      case "es":
        return "Espagnol";

      default:
        throw "Unsupported locale";
    }
};

exports.init = function() {
    exports.setTranslation();
};

Ti.App.Properties.addEventListener("change", function() {
    Ti.API.trace("config.change event handler...");
    Ti.API.debug(String.format("Actual locale: %s", Config.getProperty("Locale").get()));
    exports.setTranslation();
});

exports.init();