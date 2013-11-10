var Config = require('config').config;
var controller = Config.isLoggedIn() ? "root_table_view" : "login";
Alloy.createController(controller).getView().open();
