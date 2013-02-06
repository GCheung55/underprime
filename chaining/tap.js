'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    tap: require('../lib/functions/chaining/tap')
})

module.exports = _