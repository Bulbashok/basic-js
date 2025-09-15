const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
 let count = 0;

  const count1 = s1.split('').reduce((acc, cur) => {
   if(!acc[cur]){
     acc[cur] = 1;
   } else{
     acc[cur]++;
   }
   return acc;
 }, {})

  const count2 = s2.split('').reduce((acc, cur) => {
    if(!acc[cur]){
      acc[cur] = 1;
    } else{
      acc[cur]++;
    }
    return acc;
  }, {})

 for (let key in count2) {
   if(key in count1) {
     count += Math.min(count1[key], count2[key]);
   }
 }
 return count
}

module.exports = {
  getCommonCharacterCount
};
