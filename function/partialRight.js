'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    partialRight: require('../lib/functions/function/partialRight')
})

module.exports = _