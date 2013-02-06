'use strict'

var _ = require('../index')
var mixinReturnWrappedUnwrapped = require('../lib/util/mixinReturnWrappedUnwrapped')

mixinReturnWrappedUnwrapped.call(_, {
    head: require('./first').first
})

module.exports = _