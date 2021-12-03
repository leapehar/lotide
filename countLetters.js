const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual} === ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  for (const letter of string) {

    // console.log(letter);
    // console.log(results);
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  console.log(results);
}

countLetters('hellobgrvfevfev dewcew cewcew ');

