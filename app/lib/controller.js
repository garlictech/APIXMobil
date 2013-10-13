// ----------------------------------------------------------------------------
// Controller class. Common base of all controllers in the system.
function Controller(args, uiElements) {
    this.args = args[0] || {};
    // Register ui elements for locale updates

    if (typeof uiElements !== 'undefined') {
        this.addSettingsChangedHandler(this.registerTextUpdates(uiElements));
    }
}

// ----------------------------------------------------------------------------
// Controller API
// When settings changed, UI elements must update labels, etc. Here, we
// add a an event listener for this event. The listener must be removed
// when window closes, this method takes care of it as well. It also
// executes handler once, to ensure that everything gets updated.
Controller.prototype.addSettingsChangedHandler = function (handler){
    var self = this;
    // Otherwise, handler will be executed in global context...
    function h() {
        handler.call(self);
    }

    h();
    Ti.App.addEventListener('SettingsChanged', h);
    this.unregisterTextUpdatesAtClose(h);
};

// ----------------------------------------------------------------------------
Controller.prototype.unregisterTextUpdatesAtClose = function(listener) {
    // When the associated windod closes, remove SettingChanged event
    // listening, not to generate memoy leak.
    if (this.args.window !== 'undefined') {
        Ti.App.addEventListener('close', function() {
            Ti.API.removeEventListener("SettingsChanged", listener);
        });
    }
};

// ----------------------------------------------------------------------------
Controller.prototype.registerTextUpdates = function(uiElements) {
    function set(txt, id) {
        return (typeof id !== 'undefined') ? Alloy.Globals.L(id) : txt;
    }

    return function() {
        for(var i = 0; i < uiElements.length; ++i) {
            uiElements[i].text =
                set(uiElements[i].text, uiElements[i].text_id);
            uiElements[i].title =
                set(uiElements[i].title, uiElements[i].title_id);
            uiElements[i].label =
                set(uiElements[i].label, uiElements[i].label_id);
            uiElements[i].hintText =
                set(uiElements[i].hintText, uiElements[i].hintText_id);
            uiElements[i].message =
                set(uiElements[i].message, uiElements[i].message_id);
        }
    };
};

// ----------------------------------------------------------------------------
Controller.prototype.updateUi = function() {
    Ti.App.fireEvent("SettingsChanged");
};

// ----------------------------------------------------------------------------
module.exports = Controller;
