'use strict'

var templateSettings = require('../../util/templateSettings')
var defaults = require('../object/defaults')
var _template = require('../../util/_template')

/**
 * A micro-templating method that handles arbitrary delimiters, preserves
 * whitespace, and correctly escapes quotes within interpolated code.
 *
 * Note: In the development build `_.template` utilizes sourceURLs for easier
 * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
 *
 * Note: Lo-Dash may be used in Chrome extensions by either creating a `lodash csp`
 * build and avoiding `_.template` use, or loading Lo-Dash in a sandboxed page.
 * See http://developer.chrome.com/trunk/extensions/sandboxingEval.html
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {String} text The template text.
 * @param {Obect} data The data object used to populate the text.
 * @param {Object} options The options object.
 *  escape - The "escape" delimiter regexp.
 *  evaluate - The "evaluate" delimiter regexp.
 *  interpolate - The "interpolate" delimiter regexp.
 *  sourceURL - The sourceURL of the template's compiled source.
 *  variable - The data object variable name.
 *
 * @returns {Function|String} Returns a compiled function when no `data` object
 *  is given, else it returns the interpolated text.
 * @example
 *
 * // using a compiled template
 * var compiled = _.template('hello <%= name %>');
 * compiled({ 'name': 'moe' });
 * // => 'hello moe'
 *
 * var list = '<% _.forEach(people, function(name) { %><li><%= name %></li><% }); %>';
 * _.template(list, { 'people': ['moe', 'larry'] });
 * // => '<li>moe</li><li>larry</li>'
 *
 * // using the "escape" delimiter to escape HTML in data property values
 * _.template('<b><%- value %></b>', { 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
 * _.template('hello ${ name }', { 'name': 'curly' });
 * // => 'hello curly'
 *
 * // using the internal `print` function in "evaluate" delimiters
 * _.template('<% print("hello " + epithet); %>!', { 'epithet': 'stooge' });
 * // => 'hello stooge!'
 *
 * // using custom template delimiters
 * _.templateSettings = {
 *   'interpolate': /{{([\s\S]+?)}}/g
 * };
 *
 * _.template('hello {{ name }}!', { 'name': 'mustache' });
 * // => 'hello mustache!'
 *
 * // using the `sourceURL` option to specify a custom sourceURL for the template
 * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
 *
 * // using the `variable` option to ensure a with-statement isn't used in the compiled template
 * var compiled = _.template('hello <%= data.name %>!', null, { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 *   var __t, __p = '', __e = _.escape;
 *   __p += 'hello ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
 *   return __p;
 * }
 *
 * // using the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and a stack trace
 * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */

function template(text, data, options) {
    // based on John Resig's `tmpl` implementation
    // http://ejohn.org/blog/javascript-micro-templating/
    // and Laura Doktorova's doT.js
    // https://github.com/olado/doT
    text || (text = '')

    // avoid missing dependencies when `iteratorTemplate` is not defined
    options = defaults({}, options, templateSettings)

    options.imports = defaults({}, options.imports, settings.imports)

    return _template(text, data, options)
}

module.exports = template
