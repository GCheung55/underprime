'use strict'

var _ = require('../index')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    cloneDeep: require('../lib/functions/object/cloneDeep')
})

module.exports = _