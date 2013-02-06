'use strict'

var toString = {}.toString
var argsClass = require('../toStringClasses/argsClass')

/** Detect if `arguments` objects [[Class]] is unresolvable (Firefox < 4, IE < 9) */
module.exports = (function(value){
    return toString.call(value) == argsClass;
})(1);
