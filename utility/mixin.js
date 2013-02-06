'use strict'

var _ = require('../index')
var mixin = require('../lib/functions/utility/mixin')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    mixin: mixin
})

module.exports = _