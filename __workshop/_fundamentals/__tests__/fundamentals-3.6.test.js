// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  expect(calculator(["add", 10, 410])).toBe(420);
  expect(calculator(["add", 10, 59])).toBe(69);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
