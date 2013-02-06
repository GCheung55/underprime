'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    forEach: require('../lib/functions/collection/forEach')
})

module.exports = _