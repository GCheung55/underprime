'use strict'

var _ = require('../')
var identity = require('../lib/functions/utility/identity')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    identity: identity
})

module.exports = _