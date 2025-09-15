const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = "";
  if (!Array.isArray(members)) {
    return false;
  }
  for (let firstName of members) {
    if (typeof firstName === "string") {
      result += firstName.trim()[0].toUpperCase();
    }
  }
  return result.split("").sort().join("");
}


module.exports = {
  createDreamTeam,
};
