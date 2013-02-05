'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    extend: require('./assign').assign
})

module.exports = _