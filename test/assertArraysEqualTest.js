const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

assertEqual([1, 2, 3], [3, 2, 1]);
