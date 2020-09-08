const sumFuncs = require("./sum-range");
const { exportAllDeclaration } = require("@babel/types");

test("add all elements in provided array", () => {
  expect(sumFuncs.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
});

test("use reduce() to add all elems in array", () => {
  expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(sumFuncs.add)).toEqual(55);
});

test("reduce() w/ starting value works ", () => {
  expect([1, 2, 3].reduce(sumFuncs.add, 10)).toEqual(16);
});

test("add all numbers using provided range", () => {
  expect(sumFuncs.sumRange(1, 10)).toEqual(55);
});

test("add numbers in range that fall at provided interval ", () => {
  expect(sumFuncs.sumRangeSkip(1, 10, 2)).toEqual(25);
});

test("create an array from provided range and interval ", () => {
  expect(sumFuncs.arrRangeSkip(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
});
