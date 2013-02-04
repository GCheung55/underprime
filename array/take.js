'use strict'

var _ = require('../')
var mixinReturnWrappedUnwrapped = require('../lib/util/mixinReturnWrappedUnwrapped')

mixinReturnWrappedUnwrapped.call(_, {
    take: require('../lib/functions/array/take')
})

module.exports = _