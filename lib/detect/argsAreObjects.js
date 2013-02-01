'use strict'

/** Detect if `arguments` objects are `Object` objects (all but Opera < 10.5) */
var argsAreObjects = (function() {
    return arguments.constructor == Object;
})();

module.exports = argsAreObjects