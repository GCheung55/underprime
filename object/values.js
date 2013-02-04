'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    values: require('../lib/functions/object/values')
})

module.exports = _