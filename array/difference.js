'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    difference: require('../lib/functions/array/difference')
})

module.exports = _