'use strict'

var _ = require('../index')
var identity = require('../lib/functions/utility/identity')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    identity: identity
})

module.exports = _