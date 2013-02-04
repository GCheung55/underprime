'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    map: require('../lib/functions/collection/map')
})

module.exports = _