'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    omit: require('../lib/functions/object/omit')
})

module.exports = _