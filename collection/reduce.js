'use strict'

var _ = require('../index')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    reduce: require('../lib/functions/collection/reduce')
})

module.exports = _