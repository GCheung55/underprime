'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    zip: require('../lib/functions/array/zip')
})

module.exports = _