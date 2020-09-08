// input: [1, 2, 3]
// output: {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}

const arrayToList = (arr) => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
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
    rest: arrayToList(arr),
  };
};

const listToArr = (list) => {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

console.log(arrayToList([1, 2, 3]));
console.log(arrayToList02([7, 8, 9]));

console.log(
  listToArr({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } })
);
