'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    bindAll: require('../lib/functions/function/bindAll')
})

module.exports = _