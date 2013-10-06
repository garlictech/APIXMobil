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
    it("*** Test getHumanTextOfLocale", function() {
        expect(locale.getHumanTextOfLocale("en")).toBe("English");
        expect(locale.getHumanTextOfLocale("hu")).toBe("Magyar");
        expect(locale.getHumanTextOfLocale("es")).toBe("Espagnol");
        var cought = false;
        try {
            locale.getHumanTextOfLocale("foobar");
        } catch (err) {
            "Unsupported locale" === err && (cought = true);
        }
        expect(cought).toBe(true);
    });
    it("Tear down", function() {
        saved_locale && Ti.App.Properties.setString("Locale", saved_locale);
    });
});