'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    debounce: require('../lib/functions/function/debounce')
})

module.exports = _