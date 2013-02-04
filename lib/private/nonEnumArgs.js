'use strict'

/** Detect if an `arguments` object's indexes are non-enumerable (IE < 9) */
var nonEnumArgs = true;

(function() {
    for(var prop in arguments) {
        nonEnumArgs = !prop;
    }
})(1)

module.exports = nonEnumArgs