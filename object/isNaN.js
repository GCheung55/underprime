'use strict'

var _ = require('../index')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    isNaN: require('../lib/functions/object/isNaN')
})

module.exports = _