'use strict'

var _ = require('../')
var mixinReturnWrappedUnwrapped = require('../lib/util/mixinReturnWrappedUnwrapped')

mixinReturnWrappedUnwrapped.call(_, {
    head: require('./first').first
})

module.exports = _