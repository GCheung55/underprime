'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    merge: require('../lib/functions/object/merge')
})

module.exports = _