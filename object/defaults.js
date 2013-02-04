'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    defaults: require('../lib/functions/object/defaults')
})

module.exports = _