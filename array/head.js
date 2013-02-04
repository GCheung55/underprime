'use strict'

var _ = require('../')
var mixinReturnWrappedUnwrapped = require('../lib/util/mixinReturnWrappedUnwrapped')

mixinReturnWrappedUnwrapped.call(_, {
    head: require('../lib/functions/array/head')
})

module.exports = _