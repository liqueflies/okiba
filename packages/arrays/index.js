/**
 * @module Okiba / arrays
 * @description Utilities to work with arrays
 */

/**
 * Return the first element if it only contains one
 *
 * ```javascript
 * const els = arrayOrOne([🍏, 🍌])
 * console.log(els) // [🍏, 🍌]
 *
 * const els = arrayOrOne([🍏])
 * console.log(els) // 🍏
 * ```
 *
 * @param {Array-like} arrayLike The options object.
 * @returns {any} The first element or the argument
 */
export function arrayOrOne(arrayLike) {
  if (arrayLike.length === 1) {
    return arrayLike[0]
  }

  return arrayLike
}

/**
 * Cast an array-like object or single element to Array
 *
 * @param {any} castable Array to cast
 * @returns {Array} The array-like converted to Array, or an Array containing the element
 */
export function castArray(castable) {
  if (castable instanceof Array) {
    return castable
  }

  if (castable.length === void 0) {
    return [castable]
  }

  return Array.prototype.slice.call(castable)
}
