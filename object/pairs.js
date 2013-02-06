'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    pairs: require('../lib/functions/object/pairs')
})

module.exports = _