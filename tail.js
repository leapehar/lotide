


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual} === ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

let array1 = [1, 2, 3, 4, 5];



const tail = function (arr) {
  let newArray = arr.slice(1);
  return newArray;
}

assertEqual(tail(array1), [2, 3, 4, 5]);

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


//My test case

const anotherResult = tail(["one", "two", "three", "four"]);
assertEqual(anotherResult.length, 3);
assertEqual(anotherResult[0], "two");
assertEqual(anotherResult[1], "three");
assertEqual(anotherResult[2], "four");


// Test Case: Check the original array 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const moreWords = ["Coding", "Bootcamp", "Program"];
tail(moreWords);
assertEqual(moreWords.length, 3);