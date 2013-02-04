'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    where: require('../lib/functions/collection/where')
})

module.exports = _