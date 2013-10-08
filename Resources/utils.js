exports.openWindowWithBottomClicksDisabled = function(viewName, arg) {
    var cover_window = Alloy.createController("cover_window").getView();
    cover_window.open();
    arg.cover_window = cover_window;
    var controller = Alloy.createController(viewName, arg);
    controller.getView().open(controller.animate_in);
};

exports.doLogout = function() {
    Config.setLoggedOut();
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.LOGIN_TAB);
};

exports.registerTextUpdates = function() {
    function set(txt, id) {
        return "undefined" != typeof id ? Alloy.Globals.L(id) : txt;
    }
    function update() {
        for (var i = 0; args.length > i; ++i) {
            Ti.API.trace("Updating " + args[i]);
            args[i].text = set(args[i].text, args[i].text_id);
            args[i].title = set(args[i].title, args[i].title_id);
            args[i].label = set(args[i].label, args[i].label_id);
            args[i].hintText = set(args[i].hintText, args[i].hintText_id);
            args[i].message = set(args[i].message, args[i].message_id);
        }
    }
    Ti.API.trace("In utils.registerTextUpdates");
    args = arguments;
    Ti.App.addEventListener("SettingsChanged", update);
    update();
    return update;
};