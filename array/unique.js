'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    unique: require('./uniq').uniq
})

module.exports = _