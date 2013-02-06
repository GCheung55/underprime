'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    groupBy: require('../lib/functions/collection/groupBy')
})

module.exports = _