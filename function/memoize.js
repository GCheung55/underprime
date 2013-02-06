'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    memoize: require('../lib/functions/function/memoize')
})

module.exports = _