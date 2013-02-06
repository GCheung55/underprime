'use strict'

var _ = require('../index')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    sortedIndex: require('../lib/functions/array/sortedIndex')
})

module.exports = _