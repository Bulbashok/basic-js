const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (str.length === 0) return "";

  let result = "";
  let currentChar = str[0];
  let currentLength = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      currentLength += 1;
    } else {
      if (currentLength > 1) {
        result += currentLength + currentChar;
      } else {
        result += currentChar;
      }

      currentChar = str[i];
      currentLength = 1;
    }
  }

  if (currentLength > 1) {
    result += currentLength + currentChar;
  } else {
    result += currentChar;
  }
  return result;
}

module.exports = {
  encodeLine,
};
