'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    union: require('../lib/functions/array/union')
})

module.exports = _