'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    forEach: require('../lib/functions/collection/forEach')
})

module.exports = _