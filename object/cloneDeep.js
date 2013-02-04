'use strict'

var _ = require('../')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    cloneDeep: require('../lib/functions/object/cloneDeep')
})

module.exports = _