'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    at: require('../lib/functions/collection/at')
})

module.exports = _