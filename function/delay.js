'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    delay: require('../lib/functions/function/delay')
})

module.exports = _