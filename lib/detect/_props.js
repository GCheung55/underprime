'use strict'

/**
 * Props for detecting nonEnumArgs, hasDontEnumBug, and iteratesOwnLast
 * @private
 */

var props = []

function ctor() {
    this.x = 1
}
ctor.prototype = {
    'valueOf': 1,
    'y': 1
}
for(var prop in new ctor) {
    props.push(prop)
}

module.exports = props