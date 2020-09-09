// input: [1, 2, 3]
// output: {value: 1, next: {value: 2, next: {value: 3, next: null}}}

const arrayToList = (arr) => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], next: list };
  }
  return list;
};

const arrayToList02 = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let value = arr.shift();
  return {
    value,
    next: arrayToList(arr),
  };
};

const listToArr = (list) => {
  let arr = [];
  for (let node = list; node; node = node.next) {
    arr.push(node.value);
  }
  return arr;
};

const prepend = (item, list) => {
  return { item, next: list };
};

const nth = (list, n) => {
  if (!list) return undefined;
  else if (n === 0) return list.value;
  // pass in next and decrement index - do this until n = 0
  else return nth(list.next, n - 1);
};

console.log(arrayToList([1, 2, 3])); // { value: 1, next: { value: 2, next: { value: 3, next: null } } }
console.log(arrayToList02([7, 8, 9])); // { value: 7, next: { value: 8, next: { value: 9, next: null } } }

console.log(
  listToArr({ value: 1, next: { value: 2, next: { value: 3, next: null } } })
); // [ 1, 2, 3 ]

console.log(prepend(10, prepend(20, prepend(30, null)))); // { item: 10, next: { item: 20, next: { item: 30, next: null } } }

console.log(
  nth({ value: 7, next: { value: 8, next: { value: 9, next: null } } }, 2)
); // 9

console.log(
  nth({ value: 12, next: { value: 14, next: { value: 16, next: null } } }, 5)
); // undefined

module.exports = { arrayToList, arrayToList02, listToArr, prepend, nth };
