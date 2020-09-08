const sum = (arr) => {
  if (Array.isArray(arr)) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  } else {
    return "Input should be an array";
  }
};

const add = (curr, acc) => curr + acc;

const demoSum = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(demoSum); // 55

const demoBetterSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(add);
console.log(demoBetterSum); // 55

const reduceDemo = [1, 2, 3].reduce(add, 10);
console.log(reduceDemo); // 16

const sumRange = (start, end) => {
  if (typeof start && typeof end === "number") {
    let sum = 0;
    for (let i = start; i < end + 1; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "Inputs should be valid numbers";
  }
};

const demoSumRange = sumRange(1, 10);
console.log(demoSumRange); // 55

const demoSumRange02 = sumRange(1, 3);
console.log(demoSumRange02); // 6

const sumRangeSkip = (start, end, interval) => {
  if (typeof start && typeof end && typeof interval === "number") {
    let sum = 0;
    for (let i = start; i < end + 1; i += interval) {
      sum += i;
    }
    return sum;
  } else {
    return "Inputs should be valid numbers";
  }
};

const demoSumRangeSkip = sumRangeSkip(1, 10, 2);
console.log(demoSumRangeSkip); // 25

const arrRangeSkip = (start, end, interval) => {
  if (typeof start && typeof end && typeof interval === "number") {
    let arr = [];
    for (let i = start; i < end + 1; i += interval) {
      arr.push(i);
    }
    return arr;
  } else {
    return "Inputs should be valid numbers;";
  }
};

const demoArrRangeSkip = arrRangeSkip(1, 10, 2);
console.log(demoArrRangeSkip); // [ 1, 3, 5, 7, 9 ]
