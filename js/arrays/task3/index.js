// input: Array, callback
// output: new array

//callback
// input: el, index, arr
// output: bool

const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    const callbackResult = callback(el, index, arr);

    if (callbackResult) {
      res.push(el);
    }
  }

  return res;
};

console.log(filterArrayElements([1, 2, 3, 4, 5], el => el % 2 === 0));

console.log(filterArrayElements([1, -2, 3, -4, 5], el => el > 0));

// ===============

const mapArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    const callbackResult = callback(arr[index], index, arr);

    res.push(callbackResult);
  }

  return res;
};

console.log(mapArrayElements([1, 2, 3, 4, 5], (el, index, arr) => (el += 10)));
