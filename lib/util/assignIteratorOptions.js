'use strict'

/** Reusable iterator options for `assign` and `defaults` */

module.exports = {
    'args': 'object, source, guard',
    'top':
        'var argsIndex = 0,\n' +
        "    argsLength = typeof guard == 'number' ? 2 : arguments.length;\n" +
        'while (++argsIndex < argsLength) {\n' +
        '  iterable = arguments[argsIndex];\n' +
        '  if (iterable && objectTypes[typeof iterable]) {',
    'loop': 'result[index] = iterable[index]',
    'bottom': '  }\n}'
}