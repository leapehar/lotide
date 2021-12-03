const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual} === ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  //arrays of keys for object1 and object2
  let keyObj1 = Object.keys(object1);
  let keyObj2 = Object.keys(object2);

  //if the lenth of the two arrays is not equal, return false
  if (keyObj1.length !== keyObj2.length) {

    console.log('test');
    return false;
  };

  //looping through the indexes of keyObj1
  for (let i = 0; i < keyObj1.length; i++) {

    //if current key in object1 doesn't matches the values of the same key in object2 , return false
    if (object1[keyObj1[i]] !== object2[keyObj1[i]]) {
      return false;
    }
  }
  //if we don't return false for any of the above, the objects match and we return true.

  return true;
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

console.log(assertEqual(eqObjects(ab, abc), false));