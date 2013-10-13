function Controller(args, uiElements) {
    this.args = args[0] || {};
    "undefined" != typeof uiElements && this.addSettingsChangedHandler(this.registerTextUpdates(uiElements));
}

Controller.prototype.addSettingsChangedHandler = function(handler) {
    function h() {
        handler.call(self);
    }
    var self = this;
    h();
    Ti.App.addEventListener("SettingsChanged", h);
    this.unregisterTextUpdatesAtClose(h);
};

Controller.prototype.unregisterTextUpdatesAtClose = function(listener) {
    "undefined" !== this.args.window && Ti.App.addEventListener("close", function() {
        Ti.API.removeEventListener("SettingsChanged", listener);
    });
};

Controller.prototype.registerTextUpdates = function(uiElements) {
    function set(txt, id) {
        return "undefined" != typeof id ? Alloy.Globals.L(id) : txt;
    }
    return function() {
        for (var i = 0; uiElements.length > i; ++i) {
            uiElements[i].text = set(uiElements[i].text, uiElements[i].text_id);
            uiElements[i].title = set(uiElements[i].title, uiElements[i].title_id);
            uiElements[i].label = set(uiElements[i].label, uiElements[i].label_id);
            uiElements[i].hintText = set(uiElements[i].hintText, uiElements[i].hintText_id);
            uiElements[i].message = set(uiElements[i].message, uiElements[i].message_id);
        }
    };
};

Controller.prototype.updateUi = function() {
    Ti.App.fireEvent("SettingsChanged");
};

module.exports = Controller;