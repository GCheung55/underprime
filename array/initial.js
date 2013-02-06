'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    initial: require('../lib/functions/array/initial')
})

module.exports = _