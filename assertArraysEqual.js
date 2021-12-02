const eqArrays = require("./eqArrays");




const assertArraysEqual = function(arr1, arr2) {


  //const result = eqArrays(arr1, arr2);
  //console.log(result);

  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed ${arr1} !== ${arr2}`);
  }

}



module.exports = assertArraysEqual;