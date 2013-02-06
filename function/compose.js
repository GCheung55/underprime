'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    compose: require('../lib/functions/function/compose')
})

module.exports = _