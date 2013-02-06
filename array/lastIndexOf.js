'use strict'

var _ = require('../index')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    lastIndexOf: require('../lib/functions/array/lastIndexOf')
})

module.exports = _