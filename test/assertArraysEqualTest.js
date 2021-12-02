// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');





assertArraysEqual([1, 2, 3], [1, 2, 3]);

//console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false
assertEqual([1, 2, 3], [3, 2, 1]);


//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS