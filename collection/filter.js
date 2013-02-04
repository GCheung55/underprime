'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    filter: require('../lib/functions/collection/filter')
})

module.exports = _