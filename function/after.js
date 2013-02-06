'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    after: require('../lib/functions/function/after')
})

module.exports = _