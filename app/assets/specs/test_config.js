require('behave').andSetup(this);
var Config = require('config');

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
});
