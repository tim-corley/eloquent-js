const arrFuncs = require("./reverse-array");

test("create new reversed array from input", () => {
  expect(arrFuncs.reverseArray([3, 6, 9, 12])).toEqual([12, 9, 6, 3]);
});

test("reverse the array in place", () => {
  expect(arrFuncs.reverseArrayInPlace([1, 2, 3, 4, 5])).toEqual([
    5,
    4,
    3,
    2,
    1,
  ]);
});
