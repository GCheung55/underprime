'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    countBy: require('../lib/functions/collection/countBy')
})

module.exports = _