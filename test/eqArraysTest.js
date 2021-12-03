// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');



// // eqArrays([1, 2, 3], [3, 2, 1]) // => false

// // eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// // eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should PASS

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [3, 2, 1]", () => {
    assert.notEqual(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it(`returns true for ["1", "2", "3"], ["1", "2", "3"]`, () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it(`returns true for ["1", "2", "3"], ["1", "2", 3]`, () => {
    assert.notEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
  });

  it(`returns true for [1, 2, 3], [1, 2, 3]), true`, () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it(`returns true for [1, 2, 3], [1, 2, 4]), true`, () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });


});
