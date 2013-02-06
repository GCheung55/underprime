'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    range: require('../lib/functions/array/range')
})

module.exports = _