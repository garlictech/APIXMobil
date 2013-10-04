require("behave").andSetup(this);

var locale = require("locale");

var myL = locale.myL;

var saved_locale = "to_set";

describe("Test setTranslation functions", function() {
    it("Set up", function() {
        saved_locale = Ti.App.Properties.getString("Locale");
    });
    it("*** Test locale change.", function() {
        Ti.App.Properties.setString("Locale", "hu");
        locale.setTranslation();
        expect(myL("login")).toBe("Belépés");
        Ti.App.Properties.setString("Locale", "en");
        locale.setTranslation();
        expect(myL("login")).toBe("Login");
        Ti.App.Properties.setString("Locale", "en");
        locale.setTranslation();
        expect(myL("login")).toBe("Login");
    });
    it("Tear down", function() {
        saved_locale && Ti.App.Properties.setString("Locale", saved_locale);
    });
});