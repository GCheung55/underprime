'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    once: require('../lib/functions/function/once')
})

module.exports = _