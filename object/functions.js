'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    functions: require('../lib/functions/object/functions')
})

module.exports = _