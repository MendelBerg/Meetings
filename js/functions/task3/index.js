// How to work on tech tasks. Step by step guide
//1. Learn requirement+++++
//2. Create step by step algo (& input/output for funtions)
//3. Write draft solution & testing+++++
//4. Refactoring & final testing -> final solution

// algo
//1. iterate numbers from 2 to num ++++
//2. check if number is prime ++++
//2.1 iterate numbers from 2 to number (10) ++++
//2.2 if number is divided by any other - not prime++++

//10
// 2 -true
// 3 -true
// 4 -false
// ........
// ........

// input:number
// output:bool
function isPrime(number) {
  for (let innerNum = 2; innerNum < number; innerNum++) {
    if (number % innerNum === 0) {
      return false;
    }
  }

  return true;
}

function getPrimes(n) {
  for (let number = 2; number <= n; number += 1) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

// getPrimes(18);

// const squareArray = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map(num => num * num);
// };

const squareArray = arr => Array.isArray(arr) ? arr.map(num => num * num) : null;

console.log(squareArray([1, 2, 4]));
