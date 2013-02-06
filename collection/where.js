'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    where: require('../lib/functions/collection/where')
})

module.exports = _