const multiply = (...numbers) => numbers.reduce((acc, num) => acc * num);
function name() {
  //pseudoarr
  // console.log(arguments)
  // for (const el of arguments) {
  //   console.log(el);
  // }
  // console.log(arguments);
}

console.log(multiply(1, 2, 3, 4));

// ==============

const arr = [1, 2, 3, 4];
console.log(...arr);

const arr2 = [...arr];
console.log(arr2);

// ================

const arrS = [4, 3, 23, 11];

// input: callback
//in: el, el2
//out: num
// out: att

const sortRes = arrS.sort((el1, el2) => {
  // el1 > el2
  // el1 === el2;
  // el1 < el2

  return el1 - el2;
});

console.log(sortRes);
