'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    throttle: require('../lib/functions/function/throttle')
})

module.exports = _