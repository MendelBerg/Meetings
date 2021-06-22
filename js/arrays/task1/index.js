const numbersList1 = [1, 2, 3, 4, 5];

// input: none
// output: number
const res = numbersList1.pop();

console.log(numbersList1);
console.log(res);

// =======================

const numbersList2 = [1, 2, 3, 4, 5];

// input: number
// output: lenght of pushed array(number)
const res2 = numbersList2.push(111);
console.log(numbersList2);
console.log(res2);

// =================

const numbersList3 = [1, 2, 3, 4, 5];

// input: none
// output: number (deleted element)
const res3 = numbersList3.shift();

console.log(numbersList3);
console.log(res3);

// ====================

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

const bigNumbers = anotherNumbersList.filter(el => el > 5);
console.log(anotherNumbersList);
console.log(bigNumbers);

// function filterCallback(element, index, arr) {
//   console.log('STEP #' + index);
//   console.log('element is ' + element);
//   console.log('array is ' + arr);
//   return element > 5;
// }

// function filterCallback(element) {
//   return element > 5;
// }

const evenPositions = anotherNumbersList.filter((el, index) => el > 5 && index % 2 === 1);

console.log(evenPositions);
// function filterCallback(element, index) {
//   return element > 5 && index % 2 === 1;
// }

// filter call callbacks with all args
// filterCallback(5, 0, anotherNumbersList);
// filterCallback(0, 1, anotherNumbersList);
