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




const letterPositions = function (sentence) {

  const results = {};

  //loops over string letter by letter
  for (let i = 0; i < sentence.length; i++) {

    //if the value at sentence[i] is not a space execute code block
    if (sentence[i] !== " ") {

      //if sentence[i] is not in results array, add it in the form of an array that is the value of a key
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];

        //if sentence[i] is already a array/ value of a key in the results object, push its index to the array
      } else {
        results[sentence[i]].push(i);
      }
    }


    return results;
  };
  console.log(letterPositions('hello'));
  //test

  assertArraysEqual(letterPositions("hello").e, [1]);