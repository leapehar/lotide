const middle = function(array) {

  let middle = Math.floor(array.length / 2);
  let result;
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


module.exports = middle;