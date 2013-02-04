'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    wrap: require('../lib/functions/function/wrap')
})

module.exports = _