'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    bindKey: require('../lib/functions/function/bindKey')
})

module.exports = _