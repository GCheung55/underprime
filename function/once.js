'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    once: require('../lib/functions/function/once')
})

module.exports = _