'use strict'

/**
* Used by `sortBy` to compare transformed `collection` values, stable sorting
* them in ascending order.
*
* @private
* @param {Object} a The object to compare to `b`.
* @param {Object} b The object to compare to `a`.
* @returns {Number} Returns the sort order indicator of `1` or `-1`.
*/

module.exports = function(a, b) {
    var ai = a.index
    var bi = b.index

    a = a.criteria
    b = b.criteria

    // ensure a stable sort in V8 and other engines
    // http://code.google.com/p/v8/issues/detail?id=90
    if(a !== b) {
        if(a > b || typeof a == 'undefined') {
            return 1
        }
        if(a < b || typeof b == 'undefined') {
            return -1
        }
    }
    return ai < bi ? -1 : 1
}
