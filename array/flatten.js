'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    array: require('../lib/functions/array/flatten')
})

module.exports = _