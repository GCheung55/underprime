'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    rest: require('../lib/functions/array/rest')
})

module.exports = _