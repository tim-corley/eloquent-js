const deepEqual = require("./deep-compare");

const itemA = {
  name: { first: "foo", last: "bar" },
  location: { country: "USA", area: { state: "MA", region: "Northeast" } },
  age: 55,
};

const itemB = {
  name: { first: "foo", last: "bar" },
  location: { country: "USA", area: { state: "MA", region: "Northeast" } },
  age: 55,
};

const itemC = { object: true };

test("identical objects return true", () => {
  expect(deepEqual(itemA, itemB)).toBeTruthy();
});

test("identical objects return true", () => {
  expect(deepEqual(itemA, itemC)).toBeFalsy();
});
