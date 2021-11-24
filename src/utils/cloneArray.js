/**
 * Creates deep copy of array of arrays with primitive values.
 * @param {Array} arr Array to copy.
 * @returns {Array} Copied array.
 */


export const cloneArray = (arr) => arr.map(arr => Array.isArray(arr) ? cloneArray(arr) : arr);


