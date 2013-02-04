'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    memoize: require('../lib/functions/function/memoize')
})

module.exports = _