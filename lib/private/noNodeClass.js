'use strict'

var toString = {}.toString
var objectClass = require('../toStringClasses/objectClass')

/**
 * Detect if a node's [[Class]] is unresolvable (IE < 9)
 * and that the JS engine won't error when attempting to coerce an object to
 * a string without a `toString` function.
 */

var noNodeClass

try {
    noNodeClass = toString.call(document) == objectClass && !({
        'toString': 0
    } + '')
} catch(e) {}

module.exports = noNodeClass