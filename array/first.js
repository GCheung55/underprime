'use strict'

var _ = require('../index')
var mixinReturnWrappedUnwrapped = require('../lib/util/mixinReturnWrappedUnwrapped')

mixinReturnWrappedUnwrapped.call(_, {
    first: require('../lib/functions/array/first')
})

module.exports = _