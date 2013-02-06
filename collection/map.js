'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    map: require('../lib/functions/collection/map')
})

module.exports = _