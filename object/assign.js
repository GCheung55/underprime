'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    assign: require('../lib/functions/object/assign')
})

module.exports = _