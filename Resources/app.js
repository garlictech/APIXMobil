function initDummyData() {
    function addModel(data) {
        var location = Alloy.createModel("location", data);
        locations.add(location);
        location.save(location);
    }
    var data = [ {
        name: "Budapest",
        icon_id: 1
    }, {
        name: "Bánkút",
        icon_id: 2
    } ];
    locations.fetch();
    while (locations.length) locations.at(0).destroy();
    for (var i = 0; data.length > i; ++i) addModel(data[i]);
    locations.fetch();
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var Config = require("config");

Alloy.Collections.location = Alloy.createCollection("location");

var locations = Alloy.Collections.location;

initDummyData();

Alloy.createController("index");