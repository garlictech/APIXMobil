// ----------------------------------------------------------------------------
exports.mustBePositiveNumber = function(value) {
    return (! isNaN(value)) && value > 0;
};

// ----------------------------------------------------------------------------
// Thsi validator accepts all input, no check.
exports.ok = function() {
    return true;
};
