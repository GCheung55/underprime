'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    partial: require('../lib/functions/function/partial')
})

module.exports = _