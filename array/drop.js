'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    drop: require('./rest').rest
})

module.exports = _