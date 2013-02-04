'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    delay: require('../lib/functions/function/delay')
})

module.exports = _