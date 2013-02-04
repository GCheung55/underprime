'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    extend: require('../lib/functions/object/extend')
})

module.exports = _