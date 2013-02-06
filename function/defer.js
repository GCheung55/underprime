'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    defer: require('../lib/functions/function/defer')
})

module.exports = _