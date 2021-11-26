const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual} === ${expected}`);
  }
};


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
  console.log(result);

  if (result) {
    console.log('Assertion Passed');
    return;
  }
  console.log('Assertion Failed');
}

//assertArraysEqual([1, 2, 3], [1, 2, 3]);



const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}




assertEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);

//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

//Use assertArraysEqual to write test cases for various scenarios.
console.log(without([1, 2, 3], [1]))
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

