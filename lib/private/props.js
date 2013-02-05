'use strict'

var ctor = require('./ctor')

/**
 * Props for detecting nonEnumArgs, hasDontEnumBug, and iteratesOwnLast
 * @private
 */

var props = []

for(var prop in new ctor) {
    props.push(prop)
}

module.exports = props