'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    compose: require('../lib/functions/function/compose')
})

module.exports = _