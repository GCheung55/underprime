'use strict'

var _ = require('../')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    include: require('./contains').contains
})

module.exports = _