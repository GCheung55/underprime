'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    reject: require('../lib/functions/collection/reject')
})

module.exports = _