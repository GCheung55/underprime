'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    invert: require('../lib/functions/object/invert')
})

module.exports = _