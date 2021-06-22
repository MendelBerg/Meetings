// globalElxEnv:{
//   envRecord:{
//     test: undefined
//      letTest: undefined
//      sum: func
//   }
//   outerLexEnv: null
// }

// var vs let
console.log(sum(3,4));
console.log(test);
var test = 'hello';
console.log(test);


console.log(letTest);
let letTest = 'let';


function sum(a, b){
  return a + b;
}