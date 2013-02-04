'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    toArray: require('../lib/functions/collection/toArray')
})

module.exports = _