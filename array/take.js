'use strict'

var _ = require('../')
var mixinReturnWrappedUnwrapped = require('../lib/util/mixinReturnWrappedUnwrapped')

mixinReturnWrappedUnwrapped.call(_, {
    take: require('./first').first
})

module.exports = _