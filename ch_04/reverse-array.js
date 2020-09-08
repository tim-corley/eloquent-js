const reverseArray = (arr) => {
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
};

const reverseArrayInPlace = (arr) => {
  for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  return arr;
};

// const demoRevArr = reverseArray([1, 2, 3, 4]);
// console.log(demoRevArr);

// const demoRevArrPlace = reverseArrayInPlace([2, 4, 6, 8, 10]);
// console.log(demoRevArrPlace);

module.exports = { reverseArray, reverseArrayInPlace };
