'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    drop: require('../lib/functions/array/drop')
})

module.exports = _