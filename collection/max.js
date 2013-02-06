'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    max: require('../lib/functions/collection/max')
})

module.exports = _