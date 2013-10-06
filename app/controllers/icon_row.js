var args = arguments[0] || {};

// Here, you can use either localized or non-localized texts. Non-localized
// text has priority. If text property is not defined in args, then we use
// teh text_id property, for localized texts. Id none of them is defined,
// the result will be undefined behaviour.
if (typeof args.text !== 'undefined') {
    $.row_name.text = args.text;
} else {
    $.row_name.text_id = args.text_id;
    // Handling text label update in case of locale change
    require('utils').registerTextUpdates($.row_name);
}

// Set up what the controller should display.
if (typeof args.icon_id !== 'undefined') {
    $.icon.image = String.format("images/db_icons/%d.png", args.icon_id);
} else {
    $.icon.image = args.image;
}

function openChildWindow(e) {
    var controller = Alloy.createController(args.childWindow).getView();
    // This is defined in tables.js...
    // The controller must be open in the tab, otherwise, the new window
    // will overlay the whole tab group - so tab group navigation will
    // be invisible.
    Alloy.Globals.tabgroup.activeTab.open(controller);
}
