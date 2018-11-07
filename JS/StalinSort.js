'use strict';

/**
 * @fileoverview StalinSort in ES6.
 */

let ex = function(cb=(a, b) => (a+'').localeCompare(b)) {
  return this.slice(1).reduce((b, a) => b.concat(~cb(a, b[b.length-1]) ? [a] : []), this.slice(0, 1))
}

/**
 * @description Stalin sort (remove all the items that aren't in order).
 * @param {Array} arr Array to sort
 * @param {string} [order='asc'] Order ('asc' for ascending or 'des' for descending)
 * @returns {Array} Sorted array
 */
const stalinSort = (arr, order = 'asc') => {
  let copy = [...arr], max = 0;

  for (let item of arr) {
    if ((order === 'asc' && item > max) || (order === 'desc' && item < max)) {
      max = x;
      copy.push(x);
    }
  }

  return copy;
};

module.exports = stalinSort;