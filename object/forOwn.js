'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    forOwn: require('../lib/functions/object/forOwn')
})

module.exports = _