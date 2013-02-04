'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    compact: require('../lib/functions/array/compact')
})

module.exports = _