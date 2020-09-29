// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-3.9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  expect(longestWord("Hit the gas dude")).toBe("dude");
  expect(longestWord("Hit the bong dudez")).toBe("dudez");
  expect(longestWord("Hit the bottle my dude")).toBe("bottle");
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
