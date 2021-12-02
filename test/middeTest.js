const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
//const eqArrays = require('../eqArrays');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //passes
assertArraysEqual(middle([1, 2, 3, 5, 6]), [3, 4]); //fails
