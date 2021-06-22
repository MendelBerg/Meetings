const students = ['Roman', 'Alex', 'Yulia', 'Olga', 'Vlad'];

// input: callback;
//  input: string, index (optional), arr (optional)
//  output: modified element
// output: new arr;

// function mapCallback(element) {
//   return `Hello, ${element}`;
// }

// const greetings = students.map(mapCallback);
// console.log(greetings);

// const greetings = students
//   .filter(el => {
//     if (el === 'Roman') {
//       return false;
//     }

//     return true;
//   })
//   .map(el => {
//     return `Hello, ${el}`;
// });
// console.log(greetings);

const greetings = students.filter(el => el !== 'Roman').map(el => `Hello, ${el}`);
console.log(greetings);

// ====================

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, initial acc value(optional)
//  input: acc, el, index (optional), arr (optional)
//  output: number
// output: number

// function reduceCallback(acc, el, index, arr) {
//   console.log('STEP #' + index);
//   console.log('el: ' + el);
//   console.log('acc: ' + acc);

//   if (el > 100) {
//     acc += el;
//   }

//   return acc;
// }

// const transactionsSum = transactions.reduce(reduceCallback, 0);
// console.log(transactionsSum);

const bigTransactions = transactions.reduce((acc, el) => {
  if (el > 100) {
    acc.push(el);
  }

  return acc;
}, []);
console.log(bigTransactions);
