'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    sortBy: require('../lib/functions/collection/sortBy')
})

module.exports = _