exports.isDefined = function(variable, token) {
    "undefined" == typeof variable && alert(String.format("Error at %s: variable undefined", "undefined" == typeof token ? "(unknown)" : token));
};