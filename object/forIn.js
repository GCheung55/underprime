'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    forIn: require('../lib/functions/object/forIn')
})

module.exports = _