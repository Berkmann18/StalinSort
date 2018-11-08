'use strict';

/**
 * @fileoverview StalinSort in ES6.
 * @module
 */

/**
 * @description Stalin sort (remove all the items that aren't in order).
 * @param {Array} arr Array to sort
 * @param {string} [order='asc'] Order ('asc' for ascending or 'des' for descending)
 * @returns {Array} Sorted array
 * @throws {Error} Invalid order
 */
const stalinSort = (arr, order = 'asc') => {
  if (!arr.length) return arr;
  let copy = [];

  if (order === 'asc') {
    let max = 0;
    for (let item of arr) {
      if (item >= max) {
        max = item;
        copy.push(item);
      }
    }
  } else if (order === 'des') {
    let min = Number.MAX_SAFE_INTEGER;
    for (let item of arr) {
      if (item <= min) {
        min = item;
        copy.push(item);
      }
    }
  } else throw new Error(`Invalid order: "${order}"`);

  return copy;
};

module.exports = stalinSort;