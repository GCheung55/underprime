'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    pick: require('../lib/functions/object/pick')
})

module.exports = _