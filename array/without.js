'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    without: require('../lib/functions/array/without')
})

module.exports = _