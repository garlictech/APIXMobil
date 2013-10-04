var args = arguments[0] || {};

// Set up what the controller should display.
if (typeof args.icon_id !== 'undefined') {
    $.icon.image = String.format("images/db_icons/%d.png", args.icon_id);
} else {
    $.icon.image = args.image;
}

$.row_name.text = args.text;

//alert(args.image + " " + args.text);


function openChildWindow(e) {
    var controller = Alloy.createController(args.childWindow).getView();
    // This is defined in tables.js...
    // The controller must be open in teh tab, otherwise, the new window
    // will overlay the whole tab group - so tab group navigation will
    // be invisible.
    Alloy.Globals.tabgroup.activeTab.open(controller);
}
