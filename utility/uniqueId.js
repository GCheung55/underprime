'use strict'

var _ = require('../index')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    uniqueId: require('../lib/functions/utility/uniqueId')
})

module.exports = _