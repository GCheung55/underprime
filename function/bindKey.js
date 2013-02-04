'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    bindKey: require('../lib/functions/function/bindKey')
})

module.exports = _