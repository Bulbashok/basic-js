const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this
  },
  removeLink(/* position */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  },
  reverseChain() {
    return this.chain.reverse();
  },
  finishChain() {
    return this.chain
  },
};

module.exports = {
  chainMaker,
};
