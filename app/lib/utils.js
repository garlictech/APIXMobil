// ----------------------------------------------------------------------------
// Module initialization
var Config=require("config").config;

// ----------------------------------------------------------------------------
exports.undefined = function(obj) {
    return typeof obj === 'undefined';
};

// ----------------------------------------------------------------------------
exports.merge = function(to, from) {
    if (!exports.undefined(from)) {
        for (var key in from) {
            to[key] = from[key];
        }
    }
};

// ----------------------------------------------------------------------------
exports.openWindowWithBottomClicksDisabled = function(viewName, arg) {
    var cover_window=Alloy.createController('cover_window').getView();
    cover_window.open();
    arg.cover_window = cover_window;
    var controller = Alloy.createController(viewName, arg);
    controller.getView().open(controller.animate_in);
};

// ----------------------------------------------------------------------------
exports.doLogout = function(e) {
    // Forces closing all open windows, and resets views
    //Ti.App.fireEvent("GoHome");
    Config.setLoggedOut();
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.LOGIN_TAB);
    // Clear all the downloaded collections
    Alloy.Globals.collections = {};
};

// When locale changes, text of views must be updated to show the translations.
// Each views containing localizable text must call this function. Arguments
// are the view elements having text attributes. Define text id as
// text attribute name suffixed by _id. Like label_id, lext_id, title_id...
exports.registerTextUpdates = function() {
    Ti.API.trace("In utils.registerTextUpdates");
    // ...because, in the unnamed function below, arguments will be overwritten
    // by it own arguments...
    args = arguments;

    function set(txt, id) {
        return (typeof id !== 'undefined') ? Alloy.Globals.L(id) : txt;
    }

    function update() {
        for(var i = 0; i < args.length; ++i) {
            Ti.API.trace("Updating " + args[i]);
            args[i].text = set(args[i].text, args[i].text_id);
            args[i].title = set(args[i].title, args[i].title_id);
            args[i].label = set(args[i].label, args[i].label_id);
            args[i].hintText = set(args[i].hintText, args[i].hintText_id);
            args[i].message = set(args[i].message, args[i].message_id);
        }
    }

    Ti.App.addEventListener('SettingsChanged', update);
    update();
    return update;
};

// ----------------------------------------------------------------------------
exports.floatDate = function(date) {
    var zeroDate = new Date(1899, 11, 30, 0, 0, 0);
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var diffDays = Math.round(Math.abs((date.getTime() - zeroDate.getTime())/(oneDay)));
    var hour = 1.0 / 24.0 * date.getHours();
    var minutes = 1.0 / 24.0 / 60.0 * date.getMinutes();
    return 1.0 * diffDays + hour + minutes;
};
