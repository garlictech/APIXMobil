// Factory to set up a dummy server "endpoint": no communication with a
// web server, it simply returns static data. For testing purposes only.
// In every cases, it simulates the lag coming from communicating with the
// web server. It is a 3 seconds "sleep".
function _dummyClientFactory() {
    // Simulates 3 sec lag.
    function simulateLag() {
        setTimeout(function() {}, 3000);
    }
    // Login function. Using pre-defined usernames, we can test
    // and simulate different scenarios. Password is ignored now.
    //
    // Username 'user': Successful login.
    // Username 'error': Server error.
    // Any other username: Permission denied.
    this.login = function(username, password) {
        simulateLag();
        switch (username) {
        case 'user':
            exports.errorMessage = Alloy.Globals.L("ok");
            return true;
        case 'error':
            exports.errorMessage = Alloy.Globals.L("server_error");
            return false;
        default:
            exports.errorMessage = Alloy.Globals.L("permission_denied");
            return false;
        }
    };

    // Log out from the web service
    this.logout = function() {
        simulateLag();
        return true;
    };

    return this;
}

// Constructs the API for dummy server configuration.
exports.dummyClientFactory = function() {
    // The web server client proxy.
    var client = _dummyClientFactory();
    // Log in to the web server. In case of successful login, store username
    // and password for the next logins.
    exports.login = client.login;
    exports.logout = client.logout;
};

// The actual client library is: dummyClient
exports.dummyClientFactory();
