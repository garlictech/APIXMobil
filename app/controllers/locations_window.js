// Create initial, test models
// Create a variable to reference our collection
var locations = Alloy.Collections.location;
locations.fetch();

function goBack(e) {
    $.locations_window.close();
}

Ti.App.addEventListener('GoToHome', function(e) {
    $.locations_window.close();
});
