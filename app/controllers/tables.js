var data = [
    {title: "Név", value: "1.1345", className: "tableRow", hasDetail: false},
    {title: "Helyszín", value: "Bp, Budaörsi u. 21", className: "tableRow",hasDetail: true},
    {title: "Készlet", value: "Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg", className: "tableRow",hasDetail: true}
];

function showItems(e) {
    var args = {
        title: e.rowData.rowTitle,
        value: e.rowData.value
    };

    var detail=Alloy.createController('details', args).getView();

    Alloy.Globals.tabGroup.activeTab.open(detail);
}

function goHome(e) {
    alert ("GoHome");
}

function goInfoScreen(e) {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.INFO_TAB);
}

var rowData=[];

for (var i = 0; i < data.length; ++i) {
    var payload = {
        rowId: i,
        title: data[i].title,
        value: data[i].value
    };

    var row=Alloy.createController('row', payload).getView();
    rowData.push(row);
}

$.table.data=rowData;
