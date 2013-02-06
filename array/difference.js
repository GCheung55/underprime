'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    difference: require('../lib/functions/array/difference')
})

module.exports = _