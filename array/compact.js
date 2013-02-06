'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    compact: require('../lib/functions/array/compact')
})

module.exports = _