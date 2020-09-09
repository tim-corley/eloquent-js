const listFuncs = require("./lists");
const { prepend } = require("./lists");

test("list is created from provided array", () => {
  expect(listFuncs.arrayToList([6, 8, 10])).toEqual({
    value: 6,
    next: { value: 8, next: { value: 10, next: null } },
  });
});

test("list is (recursively) created from provided array", () => {
  expect(listFuncs.arrayToList02([2, 4, 6])).toEqual({
    value: 2,
    next: { value: 4, next: { value: 6, next: null } },
  });
});

test("array is created from provided list", () => {
  expect(
    listFuncs.listToArr({
      value: 3,
      next: { value: 5, next: { value: 7, next: null } },
    })
  ).toEqual([3, 5, 7]);
});

test("new list is created with item added to start", () => {
  expect(listFuncs.prepend(10, prepend(20, prepend(30, null)))).toEqual({
    item: 10,
    next: { item: 20, next: { item: 30, next: null } },
  });
});

test("correct value returned for provided index", () => {
  expect(
    listFuncs.nth(
      { value: 7, next: { value: 8, next: { value: 9, next: null } } },
      2
    )
  ).toEqual(9);
});

test("correct value returned for provided index", () => {
  expect(
    listFuncs.nth(
      { value: 6, next: { value: 5, next: { value: 4, next: null } } },
      8
    )
  ).toBeUndefined();
});
