'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    pluck: require('../lib/functions/array/pluck')
})

module.exports = _