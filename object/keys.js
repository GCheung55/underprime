'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    keys: require('../lib/functions/object/keys')
})

module.exports = _