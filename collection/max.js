'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    max: require('../lib/functions/collection/max')
})

module.exports = _