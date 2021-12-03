const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns true for [1, 2, 3, 4, 5, 6]), [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns false for [1, 2, 3, 5, 6]), [3, 4]", () => {
    assert.notDeepEqual(middle([1, 2, 3, 5, 6]), [3, 4]);
  });
});