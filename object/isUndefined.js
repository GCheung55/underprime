'use strict'

var _ = require('../')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    isUndefined: require('../lib/functions/object/isUndefined')
})

module.exports = _