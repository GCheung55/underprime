'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    tap: require('../lib/functions/chaining/tap')
})

module.exports = _