'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    tail: require('../lib/functions/array/tail')
})

module.exports = _