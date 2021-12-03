const eqObjects = function(object1, object2) {

  //arrays of keys for object1 and object2
  let keyObj1 = Object.keys(object1);
  let keyObj2 = Object.keys(object2);

  //if the lenth of the two arrays is not equal, return false
  if (keyObj1.length !== keyObj2.length) {


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


// FUNCTION IMPLEMENTATION


const assertObjectsEqual = function(actual, expected) {

  //displays the output of ${actual} and ${expected}
  const inspect = require('util').inspect;

  // Implement me!

  //Variable that the eqObject function is assigned to to make it easier and cleaner condition to check in the if/else statement
  let eqObjectsVariable = eqObjects(actual, expected);

  //checking if qObjectsVariable evaluates to true
  if (eqObjectsVariable) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else (console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  )

};

console.log(assertObjectsEqual(ab, ba));
console.log(assertObjectsEqual(ab, abc));
