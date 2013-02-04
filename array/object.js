'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    object: require('../lib/functions/array/object')
})

module.exports = _