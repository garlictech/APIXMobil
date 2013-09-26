// The persistent configuration.
function credentialFactory() {
    function dummyCredentials() {
        this.login = function(username, password) {
            return username == "u" && password == "p";
        };
    }

    dummyCredentials();
    return this;
}

exports.isLoggedIn = function () {
    return Ti.App.Properties.getString('loggedIn');
};

exports.login = function(username, password, callback) {
    credentials = credentialFactory();

    if (credentials.login(username, password)) {
        Ti.App.Properties.setString('loggedIn', 1);
        Ti.App.Properties.setString('username', username);
        Ti.App.Properties.setString('password', password);

        setTimeout(function() {
            callback({ result: 'ok' });
        }, 3000);
    } else {
        setTimeout(function() {
            callback({ result: 'error', msg: 'Login error' });
        }, 3000);
    }
};

exports.logout = function (callback) {
    Ti.App.Properties.removeProperty('loggedIn');
    callback({ result: 'ok' });
};
