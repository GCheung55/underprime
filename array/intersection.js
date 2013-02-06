'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    intersection: require('../lib/functions/array/intersection')
})

module.exports = _