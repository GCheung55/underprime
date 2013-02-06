'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    unique: require('./uniq').uniq
})

module.exports = _