'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    each: require('../lib/functions/collection/each')
})

module.exports = _