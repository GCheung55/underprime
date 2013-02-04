'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    select: require('../lib/functions/collection/select')
})

module.exports = _