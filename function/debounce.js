'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    debounce: require('../lib/functions/function/debounce')
})

module.exports = _