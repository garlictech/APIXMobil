// exports.fillTable = function(data, table) {
//     var rowData=[];

//     for (var i = 0; i < data.length; ++i) {
//         var payload = {
//             rowId: i,
//             title: data[i].title,
//             value: data[i].value
//         };

//         var row=Alloy.createController('row', payload).getView();
//         rowData.push(row);
//     }

//     table.data=rowData;
// };

exports.openWindowWithBottomClicksDisabled = function(viewName, arg) {
    var cover_window=Alloy.createController('cover_window').getView();
    cover_window.open();
    arg.cover_window = cover_window;
    var controller = Alloy.createController(viewName, arg);
    controller.getView().open(controller.animate_in);
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
        if (typeof id !== 'undefined')
            Ti.API.trace(id + " " + Alloy.Globals.L(id));
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
