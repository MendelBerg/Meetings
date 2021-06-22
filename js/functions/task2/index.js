function sum(from, to, printer) {
  console.log(from);
  console.log(to);
  console.log(printer);

  let sum = 0;

  for (let i = from; i <= to; i += 1) {
    sum += i;
  }

  printer(sum);
}

function printResult(res) {
  console.log('Result is here: ' + res);
}

// function sentEmail(res) {
//   //........
//   //........
//   //........
//   //........
//   //........
//   //........
//   console.log(res);
// }

//test printResult
const number = 444;
printResult(number);

// test
const a = 5;
const b = 15;
const result = sum(a, b, printResult);
console.log(result);