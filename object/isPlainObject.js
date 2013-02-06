'use strict'

var _ = require('../index')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    isPlainObject: require('../lib/functions/object/isPlainObject')
})

module.exports = _