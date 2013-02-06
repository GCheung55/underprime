'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    uniq: require('../lib/functions/array/uniq')
})

module.exports = _