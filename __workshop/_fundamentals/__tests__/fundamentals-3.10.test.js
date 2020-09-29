// We import (require) the function that we want to test.
const makeIntoTitle = require("../fundamentals-3.10");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 10", () => {
  expect(makeIntoTitle("a bb ccc dddd e ff ggg")).toBe(
    "A Bb Ccc Dddd E Ff Ggg"
  );
  expect(makeIntoTitle("gimmie that title, boy")).toBe(
    "Gimmie That Title, Boy"
  );
  expect(makeIntoTitle("but i would rather keep it for myself")).toBe(
    "But I Would Rather Keep It For Myself"
  );
  expect(makeIntoTitle("hell-o")).toBe(
    "Hell-o"
  );
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
