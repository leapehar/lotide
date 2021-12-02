
// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {

//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }

//   }
//   return true;
// }

// const assertArraysEqual = function(arr1, arr2) {


//   const result = eqArrays(arr1, arr2);
//   //console.log(result);

//   if (result) {
//     console.log('Assertion Passed');
//     return;
//   }
//   console.log('Assertion Failed');
// }

//assertArraysEqual([1, 2, 3], [1, 2, 3]);

const middle = function(array) {
  //let newArray = [];
  let middle = Math.floor(array.length / 2);
  let result;
  //console.log(middle);
  //console.log(array[middle]);
  if (array.length <= 2) {
    result = [];
    return result;
  } else if (array.length > 2 && array.length % 2 !== 0) {
    result = array[middle];
    return result;
  } else if (array.length > 2 && array.length % 2 === 0) {
    result = [array[middle - 1], array[middle]];
    return result;
  }

}
//console.log(middle([1, 2, 3, 4, 5, 6]));
//console.log(middle([1, 2, 7, 4, 5]));

//use the assertArraysEqual function for testing our new function.




module.exports = middle;