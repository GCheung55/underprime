'use strict'

var _ = require('../index')
var mixinReturnWrappedUnwrapped = require('../lib/util/mixinReturnWrappedUnwrapped')

mixinReturnWrappedUnwrapped.call(_, {
    last: require('../lib/functions/array/last')
})

module.exports = _