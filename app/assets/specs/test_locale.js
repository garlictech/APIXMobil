require('behave').andSetup(this);
var locale = require('locale');
var myL = locale.myL;
var saved_locale = "to_set";

describe('Test setTranslation functions', function() {
    it ('Set up', function() {
        saved_locale = Ti.App.Properties.getString("Locale");
    });

    it ('*** Test locale change.', function() {
        Ti.App.Properties.setString("Locale", "hu");
        locale.setTranslation();
        // Check if really the Hungarian translation is used
        expect(myL("login")).toBe("Belépés");
        // Now change locale, check if it has really been changed.
        Ti.App.Properties.setString("Locale", "en");
        locale.setTranslation();
        expect(myL("login")).toBe("Login");
        // Now change to the same, check if the translation string is
        // unchanged.
        Ti.App.Properties.setString("Locale", "en");
        locale.setTranslation();
        expect(myL("login")).toBe("Login");
    });

    it ('Tear down', function() {
        if (saved_locale) {
            Ti.App.Properties.setString("Locale", saved_locale);
        }
    });
});
