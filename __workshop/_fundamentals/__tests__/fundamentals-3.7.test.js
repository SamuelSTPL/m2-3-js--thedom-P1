// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  expect(repeat(["Shizzle", 2])).toBe("ShizzleShizzle");
  expect(repeat(["Dizzle", 3])).toBe("DizzleDizzleDizzle");
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
