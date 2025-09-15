const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 const result = [];
 const digits = n.toString()
for (let i = 0; i < digits.length; i++) {
    const newDigit = digits.slice(0,i) + digits.slice(i + 1);
    result.push(+newDigit);
}
 return Math.max(...result);
}

module.exports = {
  deleteDigit
};
