'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    values: require('../lib/functions/object/values')
})

module.exports = _