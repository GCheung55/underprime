'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    bind: require('../lib/functions/function/bind')
})

module.exports = _