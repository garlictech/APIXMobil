function _dummyClientFactory() {
    function simulateLag() {
        setTimeout(function() {}, 3e3);
    }
    this.login = function(username) {
        simulateLag();
        switch (username) {
          case "user":
            exports.errorMessage = Alloy.Globals.L("ok");
            return true;

          case "error":
            exports.errorMessage = Alloy.Globals.L("server_error");
            return false;

          default:
            exports.errorMessage = Alloy.Globals.L("permission_denied");
            return false;
        }
    };
    this.logout = function() {
        simulateLag();
        return true;
    };
    return this;
}

exports.dummyClientFactory = function() {
    var client = _dummyClientFactory();
    exports.login = client.login;
    exports.logout = client.logout;
};

exports.dummyClientFactory();