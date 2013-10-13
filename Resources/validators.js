exports.mustBePositiveNumber = function(value) {
    return !isNaN(value) && value > 0;
};

exports.ok = function() {
    return true;
};