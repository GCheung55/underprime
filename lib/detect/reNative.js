"use strict"

/** Used to detect if a method is native */
module.exports = RegExp('^' +
    ({}.valueOf + '')
        .replace(/[.*+?^=!:${}()|[\]\/\\]/g, '\\$&')
        .replace(/valueOf|for [^\]]+/g, '.+?') + '$'
);