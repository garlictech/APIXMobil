// this is the exported function that opens the controller and displays
// the main window
exports.openMainWindow = function(_tab) {
  _tab.open($.set_language);
};

function onChange(e) {
    var Config = require('config');
    Config.language = e.row.title;
    alert(e.row.title);
}
