'use strict'

/** Detect if `arguments` objects are `Object` objects (all but Opera < 10.5) */
module.exports = (function() {
    return arguments.constructor == Object;
})();