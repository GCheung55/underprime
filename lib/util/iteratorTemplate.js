'use strict'

var _template = require('./_template')
// var template = require('../functions/utility/template')

/**
* The template used to create iterator functions.
*
* @private
* @param {Obect} data The data object used to populate the text.
* @returns {String} Returns the interpolated text.
*/
var iteratorTemplate = _template(
    // the `iterable` may be reassigned by the `top` snippet
    'var index, iterable = <%= firstArg %>, ' +
    // assign the `result` variable an initial value
    'result = iterable;\n' +
    // exit early if the first argument is falsey
    'if (!iterable) return result;\n' +
    // add code before the iteration branches
    '<%= top %>;\n' +

    // array-like iteration:
    '<% if (arrays) { %>' +
    'var length = iterable.length; index = -1;\n' +
    "if (<%= arrays %>) {" +

    // add support for accessing string characters by index if needed
    '  <% if (noCharByIndex) { %>\n' +
    '  if (isString(iterable)) {\n' +
    "    iterable = iterable.split('')\n" +
    '  }' +
    '  <% } %>\n' +

    // iterate over the array-like value
    '  while (++index < length) {\n' +
    '    <%= loop %>\n' +
    '  }\n' +
    '}\n' +
    'else {' +

    // object iteration:
    // add support for iterating over `arguments` objects if needed
    '  <%  } else if (nonEnumArgs) { %>\n' +
    '  var length = iterable.length; index = -1;\n' +
    '  if (length && isArguments(iterable)) {\n' +
    '    while (++index < length) {\n' +
    "      index += '';\n" +
    '      <%= loop %>\n' +
    '    }\n' +
    '  } else {' +
    '  <% } %>' +

    // Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
    // (if the prototype or a property on the prototype has been set)
    // incorrectly sets a function's `prototype` property [[Enumerable]]
    // value to `true`. Because of this Lo-Dash standardizes on skipping
    // the the `prototype` property of functions regardless of its
    // [[Enumerable]] value.
    '  <% if (!hasDontEnumBug) { %>\n' +
    "  var skipProto = typeof iterable == 'function' && \n" +
    "    propertyIsEnumerable.call(iterable, 'prototype');\n" +
    '  <% } %>' +

    // iterate own properties using `Object.keys` if it's fast
    '  <% if (isKeysFast && useHas) { %>\n' +
    '  var ownIndex = -1,\n' +
    '      ownProps = objectTypes[typeof iterable] ? nativeKeys(iterable) : [],\n' +
    '      length = ownProps.length;\n\n' +
    '  while (++ownIndex < length) {\n' +
    '    index = ownProps[ownIndex];\n' +
    "    <% if (!hasDontEnumBug) { %>if (!(skipProto && index == 'prototype')) {\n  <% } %>" +
    '    <%= loop %>\n' +
    '    <% if (!hasDontEnumBug) { %>}\n<% } %>' +
    '  }' +

    // else using a for-in loop
    '  <% } else { %>\n' +
    '  for (index in iterable) {<%' +
    '    if (!hasDontEnumBug || useHas) { %>\n    if (<%' +
    "      if (!hasDontEnumBug) { %>!(skipProto && index == 'prototype')<% }" +
    '      if (!hasDontEnumBug && useHas) { %> && <% }' +
    '      if (useHas) { %>hasOwnProperty.call(iterable, index)<% }' +
    '    %>) {' +
    '    <% } %>\n' +
    '    <%= loop %>;' +
    '    <% if (!hasDontEnumBug || useHas) { %>\n    }<% } %>\n' +
    '  }' +
    '  <% } %>' +

    // Because IE < 9 can't set the `[[Enumerable]]` attribute of an
    // existing property and the `constructor` property of a prototype
    // defaults to non-enumerable, Lo-Dash skips the `constructor`
    // property when it infers it's iterating over a `prototype` object.
    '  <% if (hasDontEnumBug) { %>\n\n' +
    '  var ctor = iterable.constructor;\n' +
    '    <% for (var k = 0; k < 7; k++) { %>\n' +
    "  index = '<%= shadowed[k] %>';\n" +
    '  if (<%' +
    "      if (shadowed[k] == 'constructor') {" +
    '        %>!(ctor && ctor.prototype === iterable) && <%' +
    '      } %>hasOwnProperty.call(iterable, index)) {\n' +
    '    <%= loop %>\n' +
    '  }' +
    '    <% } %>' +
    '  <% } %>' +
    '  <% if (arrays || nonEnumArgs) { %>\n}<% } %>\n' +

    // add code to the bottom of the iteration function
    '<%= bottom %>;\n' +
    // finally, return the `result`
    'return result'
)

module.exports = iteratorTemplate