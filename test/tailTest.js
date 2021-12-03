const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');
// const assertEqual = require('../assertEqual');


// assertEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// //My test case

const anotherResult = tail(["one", "two", "three", "four"]);
// assertEqual(anotherResult.length, 3);
// assertEqual(anotherResult[0], "two");
// assertEqual(anotherResult[1], "three");
// assertEqual(anotherResult[2], "four");


// // Test Case: Check the original array 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const moreWords = ["Coding", "Bootcamp", "Program"];
tail(moreWords);
// assertEqual(moreWords.length, 3);


//const tail = require('../tail');

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