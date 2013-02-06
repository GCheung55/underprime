'use strict'

var templateSettings = require('./templateSettings')
var escape = require('../functions/utility/escape')
var keys = require('../functions/object/keys')
var values = require('../functions/object/values')
var reInterpolate = require('../private/reInterpolate')
var reEsTemplate = require('../private/reEsTemplate')
var reNoMatch = require('../private/reNoMatch')
var reUnescapedString = require('../private/reUnescapedString')
var escapeStringChar = require('./escapeStringChar')

/** Used to match empty string literals in compiled template source */
var reEmptyStringLeading = /\b__p \+= '';/g
var reEmptyStringMiddle = /\b(__p \+=) '' \+/g
var reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g

var templateCounter = 0

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

module.exports = function(text, data, options) {

    // based on John Resig's `tmpl` implementation
    // http://ejohn.org/blog/javascript-micro-templating/
    // and Laura Doktorova's doT.js
    // https://github.com/olado/doT
    // var settings = lodash.templateSettings;
    text || (text = '')
    options || (options = templateSettings)

    // avoid missing dependencies when `iteratorTemplate` is not defined
    // options = iteratorTemplate ? defaults({}, options, settings) : settings;

    // var imports = iteratorTemplate && defaults({}, options.imports, settings.imports),
    //     importsKeys = iteratorTemplate ? keys(imports) : ['_'],
    //     importsValues = iteratorTemplate ? values(imports) : [lodash];

    var imports = options.imports
    var importsKeys = imports ? keys(imports) : ['escape']
    var importsValues = imports ? values(imports) : [escape]

    var isEvaluating, index = 0
    var interpolate = options.interpolate || reNoMatch
    var source = "__p += '"

    // compile regexp to match each delimiter
    var reDelimiters = RegExp(
    (options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g')

    text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue)

        // escape characters that cannot be included in string literals
        source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar)

        // replace delimiters with snippets
        if(escapeValue) {
            source += "' +\n__e(" + escapeValue + ") +\n'"
        }
        if(evaluateValue) {
            isEvaluating = true
            source += "';\n" + evaluateValue + ";\n__p += '"
        }
        if(interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'"
        }
        index = offset + match.length

        // the JS engine embedded in Adobe products requires returning the `match`
        // string in order to produce the correct `offset` value
        return match
    })

    source += "';\n"

    // if `variable` is not specified and the template contains "evaluate"
    // delimiters, wrap a with-statement around the generated code to add the
    // data object to the top of the scope chain
    var variable = options.variable
    var hasVariable = variable

    if(!hasVariable) {
        variable = 'obj'
        source = 'with (' + variable + ') {\n' + source + '\n}\n'
    }
    // cleanup code by stripping empty strings
    source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;')

    // frame code as the function body
    source = 'function(' + variable + ') {\n' + (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') + "var __t, __p = '', __e = escape" + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : (hasVariable ? '' : ', __d = ' + variable + '.' + variable + ' || ' + variable) + ';\n') + source + 'return __p\n}'

    // Use a sourceURL for easier debugging and wrap in a multi-line comment to
    // avoid issues with Narwhal, IE conditional compilation, and the JS engine
    // embedded in Adobe products.
    // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
    var sourceURL = '\n/*\n//@ sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/'

    try {
        var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues)
    } catch(e) {
        e.source = source
        throw e
    }
    if(data) {
        return result(data)
    }
    // provide the compiled function's source via its `toString` method, in
    // supported environments, or the `source` property as a convenience for
    // inlining compiled templates during the build process
    result.source = source
    return result
}
