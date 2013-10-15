require("behave").andSetup(this);

var webServiceClient = require("webServiceClient");

describe("Test dummy web server", function() {
    webServiceClient.dummyClientFactory();
    it("*** Tests login with right credentials", function() {
        expect(webServiceClient.login("user", "p")).toBe(true);
        expect(webServiceClient.errorMessage).toBe(Alloy.Globals.L("ok"));
    });
    it("*** Tests permission denied case", function() {
        expect(webServiceClient.login("not_permitted_user", "p")).toBe(false);
        expect(webServiceClient.errorMessage).toBe(Alloy.Globals.L("permission_denied"));
    });
    it("*** Tests server error case", function() {
        expect(webServiceClient.login("error", "p")).toBe(false);
        expect(webServiceClient.errorMessage).toBe(Alloy.Globals.L("server_error"));
    });
    it("*** Tests logout case", function() {
        expect(webServiceClient.logout()).toBe(true);
    });
});