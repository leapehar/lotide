const assert = require('chai').assert;


const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
//const eqArrays = require('../eqArrays');

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //passes
// assertArraysEqual(middle([1, 2, 3, 5, 6]), [3, 4]); //fails


describe("#middle", () => {
  it("returns true for [1, 2, 3, 4, 5, 6]), [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns false for [1, 2, 3, 5, 6]), [3, 4]", () => {
    assert.notDeepEqual(middle([1, 2, 3, 5, 6]), [3, 4]);
  });




});