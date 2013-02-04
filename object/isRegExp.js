'use strict'

var _ = require('../')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    isRegExp: require('../lib/functions/object/isRegExp')
})

module.exports = _