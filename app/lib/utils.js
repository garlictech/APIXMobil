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
    //controller.getView().open();
    controller.getView().open(controller.animate_in);
};
