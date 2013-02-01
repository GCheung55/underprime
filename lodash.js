var lodash = require('./lodash/index')

// add functions that return wrapped values when chaining
require('./lodash/function/after')
require('./lodash/object/assign')
require('./lodash/collection/at')
require('./lodash/function/bind')
require('./lodash/function/bindAll')
require('./lodash/function/bindKey')
require('./lodash/array/compact')
require('./lodash/function/compose')
require('./lodash/collection/countBy')
require('./lodash/function/debounce')
require('./lodash/object/defaults')
require('./lodash/function/defer')
require('./lodash/function/delay')
require('./lodash/array/difference')
require('./lodash/collection/filter')
require('./lodash/array/flatten')
require('./lodash/collection/forEach')
require('./lodash/object/forIn')
require('./lodash/object/forOwn')
require('./lodash/object/functions')
require('./lodash/collection/groupBy')
require('./lodash/array/initial')
require('./lodash/array/intersection')
require('./lodash/object/invert')
require('./lodash/collection/invoke')
require('./lodash/object/keys')
require('./lodash/collection/map')
require('./lodash/collection/max')
require('./lodash/function/memoize')
require('./lodash/object/merge')
require('./lodash/collection/min')
require('./lodash/array/object')
require('./lodash/object/omit')
require('./lodash/function/once')
require('./lodash/object/pairs')
require('./lodash/function/partial')
require('./lodash/function/partialRight')
require('./lodash/object/pick')
require('./lodash/array/pluck')
require('./lodash/array/range')
require('./lodash/collection/reject')
require('./lodash/array/rest')
require('./lodash/collection/shuffle')
require('./lodash/collection/sortBy')
//@todo think of where `tap` should go
// lodash.tap = tap
require('./lodash/function/throttle')
require('./lodash/utility/times')
require('./lodash/collection/toArray')
require('./lodash/array/union')
require('./lodash/array/uniq')
require('./lodash/object/values')
require('./lodash/collection/where')
require('./lodash/array/without')
require('./lodash/function/wrap')
require('./lodash/array/zip')

// add aliases
require('./lodash/collection/collect')
require('./lodash/array/drop')
require('./lodash/collection/each')
require('./lodash/object/extend')
require('./lodash/object/methods')
require('./lodash/collection/select')
require('./lodash/array/tail')
require('./lodash/array/unique')

//@todo add functions to `lodash.prototype`
// mixin(lodash)

/*--------------------------------------------------------------------------*/

// add functions that return unwrapped values when chaining
require('./lodash/object/clone')
require('./lodash/object/cloneDeep')
require('./lodash/collection/contains')
require('./lodash/utility/escape')
require('./lodash/collection')
require('./lodash/collection/find')
require('./lodash/object/has')
require('./lodash/utility/identity')
require('./lodash/array/indexOf')
require('./lodash/object/isArguments')
require('./lodash/object/isArray')
require('./lodash/object/isBoolean')
require('./lodash/object/isDate')
require('./lodash/object/isElement')
require('./lodash/object/isEmpty')
require('./lodash/object/isEqual')
require('./lodash/object/isFinite')
require('./lodash/object/isFunction')
require('./lodash/object/isNaN')
require('./lodash/object/isNull')
require('./lodash/object/isNumber')
require('./lodash/object/isObject')
require('./lodash/object/isPlainObject')
require('./lodash/object/isRegExp')
require('./lodash/object/isString')
require('./lodash/object/isUndefined')
require('./lodash/array/lastIndexOf')
require('./lodash/utility/mixin')
require('./lodash/utility/noConflict')
require('./lodash/utility/random')
require('./lodash/collection/reduce')
require('./lodash/collection/reduceRight')
require('./lodash/utility/result')
require('./lodash/collection/size')
require('./lodash/collection/some')
require('./lodash/array/sortedIndex')
require('./lodash/utility/template')
require('./lodash/utility/unescape')
require('./lodash/utility/uniqueId')

// add aliases
require('./lodash/collection/all')
require('./lodash/collection/any')
require('./lodash/collection/detect')
require('./lodash/collection/foldl')
require('./lodash/collection/foldr')
require('./lodash/collection/include')
require('./lodash/collection/inject')

// add functions capable of returning wrapped and unwrapped values when chaining
require('./lodash/array/first')
require('./lodash/array/last')

// add aliases
require('./lodash/array/take')
require('./lodash/array/head')

// add `Array` functions that return unwrapped values
require('./lodash/array/join')
require('./lodash/array/pop')
require('./lodash/array/shift')

// add `Array` functions that return the wrapped value
require('./lodash/array/push')
require('./lodash/array/reverse')
require('./lodash/array/sort')
require('./lodash/array/unshift')

// add `Array` functions that return new wrapped values
require('./lodash/array/concat')
require('./lodash/array/slice')
require('./lodash/array/splice')

// avoid array-like object bugs with `Array#shift` and `Array#splice`
// in Firefox < 10 and IE < 9
/*
if (hasObjectSpliceBug) {
    each(['pop', 'shift', 'splice'], function(methodName) {
      var func = arrayRef[methodName],
          isSplice = methodName == 'splice';

      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            result = func.apply(value, arguments);

        if (value.length === 0) {
          delete value[0];
        }
        return isSplice ? new lodash(result) : result;
      };
    });
}
*/
module.exports = lodash