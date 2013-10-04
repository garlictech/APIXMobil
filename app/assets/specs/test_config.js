require('behave').andSetup(this);
var Config = require('config');
var Locale = require('locale');

// startDate = Config.getQueryStartDate();
// endDate = Config.getQueryEndDate();

describe('Test config properties', function() {
    it ('*** Tests login/logout functionality', function() {
        username = "user";
        password = "password";
        Config.setLoggedIn(username, password);
        expect(Config.isLoggedIn()).toBe(true);
        expect(Ti.App.Properties.getString('loggedIn')).toBe("1");
        expect(Ti.App.Properties.getString('username')).toBe(username);
        expect(Ti.App.Properties.getString('password')).toBe(password);
        Config.setLoggedOut();
        expect(Config.isLoggedIn()).toBe(false);
        expect(Ti.App.Properties.getString('loggedIn')).toBe(null);
        expect(Ti.App.Properties.getString('username')).toBe(null);
        expect(Ti.App.Properties.getString('password')).toBe(null);
    });

    // it ('*** Test setInitialDate - no properties defined', function() {
    //     Ti.App.Properties.removeProperty('QueryStartDate');
    //     Ti.App.Properties.removeProperty('QueryEndDate');
    //     expect(Ti.App.Properties.hasProperty('QueryStartDate')).toBe(false);
    //     expect(Ti.App.Properties.hasProperty('QueryEndDate')).toBe(false);
    //     now = new Date(1900, 0, 31, 1, 1, 1);
    //     Config.setInitialDates(now);
    //     expect(Ti.App.Properties.hasProperty('QueryStartDate')).toBe(true);
    //     expect(Ti.App.Properties.hasProperty('QueryEndDate')).toBe(true);
    //     expect(Config.getQueryStartDate().toString()).toBe(now.toString());
    //     expect(Config.getQueryEndDate().toString()).toBe((new Date(1900, 0, 1, 1, 1, 1)).toString());
    // });

    // it ('*** Test setInitialDate - properties are defined', function() {
    //     expect(Ti.App.Properties.hasProperty('QueryStartDate')).toBe(true);
    //     expect(Ti.App.Properties.hasProperty('QueryEndDate')).toBe(true);
    //     now = new Date(1950, 0, 31, 1, 1, 1);
    //     Config.setInitialDates(now);
    //     expect(Config.getQueryStartDate().toString()).notToBe(now.toString());
    //     expect(Config.getQueryEndDate().toString()).notToBe((new Date(1950, 0, 1, 1, 1, 1)).toString());
    // });

    // it ('*** Test query date setters', function() {
    //     startDate = new Date(1960, 0, 31, 1, 1, 1);
    //     endDate = new Date(1970, 0, 31, 1, 1, 1);
    //     Config.setQueryDate("QueryStartDate", startDate);
    //     Config.setQueryDate("QueryEndDate", endDate);
    //     expect(Config.getQueryStartDate().toString()).toBe(startDate.toString());
    //     expect(Config.getQueryEndDate().toString()).toBe(endDate.toString());
    // });

    // it ('*** Test query date locale string representation', function() {
    //     startDate = new Date(1960, 0, 31, 1, 1, 1);
    //     endDate = new Date(1970, 0, 31, 1, 1, 1);
    //     Config.setQueryDate("QueryStartDate", startDate);
    //     Config.setQueryDate("QueryEndDate", endDate);
    //     expect(Config.getQueryStartDateString()).toBe(startDate.toLocaleDateString() + " " + startDate.toLocaleTimeString());
    //     expect(Config.getQueryEndDateString()).toBe(endDate.toLocaleDateString() + " " + endDate.toLocaleTimeString());
    // });
});

// Config.setQueryDate("QueryStartDate", startDate);
// Config.setQueryDate("QueryEndDate", endDate);
