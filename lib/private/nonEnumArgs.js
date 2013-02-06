'use strict'

/** Detect if an `arguments` object's indexes are non-enumerable (IE < 9) */

module.exports = (function() {
    var result = true

    for(var prop in arguments) {
        result = !prop
    }

    return result
})(1)
