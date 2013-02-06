'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    shuffle: require('../lib/functions/collection/shuffle')
})

module.exports = _