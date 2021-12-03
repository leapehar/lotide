const assert = require('chai').assert;
const tail = require('../tail');

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);

// //My test case

const anotherResult = tail(["one", "two", "three", "four"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

const moreWords = ["Coding", "Bootcamp", "Program"];
tail(moreWords);
// assertEqual(moreWords.length, 3);

describe("#tail", () => {
  it("returns true for result.length = 2)", () => {
    assert.equal(result.length, 2);
  });

  it(`returns true for result[0] = "Lighthouse")`, () => {
    assert.equal(result[0], "Lighthouse");
  });

  it(`returns true for result[1] = "Labs")`, () => {
    assert.equal(result[1], "Labs");
  });

  it(`returns true for anotherResult.length = 3)`, () => {
    assert.equal(anotherResult.length, 3);
  });

  it(`returns true for anotherResult[0] = "two")`, () => {
    assert.equal(anotherResult[0], "two");
  });

  it(`returns true for anotherResult[1] = "three")`, () => {
    assert.equal(anotherResult[1], "three");
  });

  it(`returns true for anotherResult[2] = "four")`, () => {
    assert.equal(anotherResult[2], "four");
  });

  it(`returns true for words.length = 3)`, () => {
    assert.equal(words.length, 3);
  });

  it(`returns true for moreWords.length = 3)`, () => {
    assert.equal(moreWords.length, 3);
  });

});