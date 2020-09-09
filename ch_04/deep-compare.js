const deepEqual = (a, b) => {
  if (a === b) return true;

  if (a === null || typeof a != "object" || b === null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
};

const objOne = {
  name: { first: "foo", last: "bar" },
  location: { country: "USA", area: { state: "MA", region: "Northeast" } },
  age: 55,
};
const objTwo = {
  name: { first: "foo", last: "bar" },
  location: { country: "USA", area: { state: "MA", region: "Northeast" } },
  age: 55,
};
const objThree = { match: 5, score: "101 - 98" };

console.log(deepEqual(objOne, objTwo)); // true
console.log(deepEqual(objOne, objThree)); // false

module.exports = deepEqual;
