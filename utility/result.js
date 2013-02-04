'use strict'

var _ = require('../')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    result: require('../lib/functions/utility/result')
})

module.exports = _