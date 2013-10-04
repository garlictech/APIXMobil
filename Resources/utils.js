exports.openWindowWithBottomClicksDisabled = function(viewName, arg) {
    var cover_window = Alloy.createController("cover_window").getView();
    cover_window.open();
    arg.cover_window = cover_window;
    var controller = Alloy.createController(viewName, arg);
    controller.getView().open(controller.animate_in);
};