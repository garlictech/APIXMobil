// ----------------------------------------------------------------------------
// Debugging support for application developers

exports.isDefined = function(variable, token) {
    if (typeof variable === 'undefined') {
        alert(String.format("Error at %s: variable undefined",
            (typeof token === 'undefined' ? "(unknown)" : token)));
    }
};
