'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    union: require('../lib/functions/array/union')
})

module.exports = _