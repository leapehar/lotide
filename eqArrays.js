

const eqArrays = function(arr1, arr2) {
  console.log(arr1, arr2);
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

//console.log(eqArrays([1, 2, 3], [3, 2, 3]));




module.exports = eqArrays;