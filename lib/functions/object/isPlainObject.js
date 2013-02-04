'use strict'

var getPrototypeOf = require('../../private/getPrototypeOf')
var shimIsPlainObject = require('../../private/shimIsPlainObject')
var isArguments = require('./isArguments')

/**
 * Checks if a given `value` is an object created by the `Object` constructor.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if `value` is a plain object, else `false`.
 * @example
 *
 * function Stooge(name, age) {
 *   this.name = name;
 *   this.age = age;
 * }
 *
 * _.isPlainObject(new Stooge('moe', 40));
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'name': 'moe', 'age': 40 });
 * // => true
 */
var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
    if(!(value && typeof value == 'object')) {
      return false
    }
    var valueOf = value.valueOf
    var objProto = typeof valueOf == 'function' && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto)

    return objProto ? value == objProto || (getPrototypeOf(value) == objProto && !isArguments(value)) : shimIsPlainObject(value)
  };

module.exports = isPlainObject
