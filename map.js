

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false;
    }

  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {


  const result = eqArrays(arr1, arr2);
  //console.log(result);

  if (result) {
    console.log('Assertion Passed');
    return;
  }
  console.log('Assertion Failed');
}





// Function Definition
// Our map function will take in two arguments:

// An array to map
// A callback function

// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// map function test cases

const results1 = map(words, word => word[0]);
//console.log(results1);

// const results2 = map(words, word => word.length);
// console.log(results2);

// const results3 = map(words, word => word.toUpperCase());
// console.log(results3);

//Pass / Fail Assertion Test cases 

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 'c']);

