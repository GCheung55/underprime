'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    pick: require('../lib/functions/object/pick')
})

module.exports = _