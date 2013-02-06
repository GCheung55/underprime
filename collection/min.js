'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    min: require('../lib/functions/collection/min')
})

module.exports = _