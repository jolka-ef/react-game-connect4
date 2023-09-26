/**
 * Creates array of arrays.
 * @param {!number} nrOfArrays Number of inner arrays contain within outer array.
 * @param {!number} arrLen Length of inner array.
 * @param {not undefined}[value] Optional inner array value.
 * @returns {[][]}
 */

export  function create2DArray(nrOfArrays, arrLen, value) {
    if(value !== undefined) {
        return [...Array(nrOfArrays)].map(() => Array(arrLen).fill(value))
    } else {
        return [...Array(nrOfArrays)].map(() => Array(arrLen))
    }
}

