'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    invoke: require('../lib/functions/collection/invoke')
})

module.exports = _