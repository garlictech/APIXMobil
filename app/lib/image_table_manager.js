// ----------------------------------------------------------------------------
// function Manager(window, view) {
function Manager(imageView) {
    this.imageView = imageView;
}

// ----------------------------------------------------------------------------
Manager.prototype.createTables = function(dataSet) {
    this.imageView.image = Ti.Utils.base64decode(dataSet[0].image);
};

// ----------------------------------------------------------------------------
Manager.prototype.deleteAllTables = function() {
    this.imageView.image = "";
};

// ----------------------------------------------------------------------------
exports.Manager = Manager;
