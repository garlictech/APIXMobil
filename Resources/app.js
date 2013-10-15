var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var locale = require("locale");

Alloy.Globals.L = locale.myL;

if ("test" == Ti.App.deployType) {
    require("specs/test_property");
    require("specs/test_date_property");
    require("specs/test_config");
    require("specs/test_webServiceClient");
    require("specs/test_locale");
    require("specs/test_utils");
    require("specs/test_table_collection");
    require("behave").run("this");
}

Alloy.Globals.places = {
    data: [ {
        text: "Budapest",
        image: "images/db_icons/1.png",
        child_collection: "sites"
    }, {
        text: "Bánkút",
        image: "images/db_icons/2.png",
        child_collection: "sites"
    } ],
    refresh: function() {
        Alloy.Globals.places.data[1].text = "Bánkút " + new Date().getSeconds();
    },
    tableNameId: "places"
};

Alloy.Globals.sites = {
    data: [ {
        text: "Bp, Budaörsi út",
        image: "images/db_icons/1.png",
        child_collection: "queries"
    }, {
        text: "Bp, Honvéd utca",
        image: "images/db_icons/1.png",
        child_collection: "queries"
    } ],
    refresh: function() {
        Alloy.Globals.sites.data[0].text = "Bp, Budaörsi út " + new Date().getSeconds();
    },
    tableNameId: "sites"
};

Alloy.Globals.groups = {
    data: [ {
        text: "Nagy Csoport",
        image: "images/locations.png"
    }, {
        text: "Kis Csoport",
        image: "images/locations.png"
    } ],
    refresh: function() {},
    tableNameId: "groups"
};

Alloy.Globals.queries = {
    data: [ {
        text_id: "refuelling_details"
    }, {
        text_id: "refuelling_summary"
    }, {
        text_id: "card_details"
    }, {
        text_id: "card_summary"
    }, {
        text_id: "tank_details"
    }, {
        text_id: "tank_diagram"
    }, {
        text_id: "tank_summary"
    }, {
        text_id: "controller_details"
    }, {
        text_id: "controller_summary"
    }, {
        text_id: "vapour_data"
    } ],
    refresh: function() {},
    tableNameId: "queries"
};

Alloy.Globals.refuelling_details = {
    data: [ {
        text_id: "vapour_data",
        child_collection: "vapour_data"
    } ],
    refresh: function() {},
    tableNameId: "refuelling_details"
};

Alloy.Globals.root_table = require("root_table_collection");

Alloy.Globals.ActualTableLocator = new (require("table_locator").TableLocator)("tables", "root_table");

Alloy.Globals.ActualTableDescriptor = {
    collection: Alloy.Globals.root_table,
    index: 0
};

Alloy.createController("index");