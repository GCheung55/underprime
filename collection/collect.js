'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    collect: require('../lib/functions/collection/collect')
})

module.exports = _