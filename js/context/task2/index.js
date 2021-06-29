'use strict';
function printMessage(country, city) {
  console.log(this);
  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}
const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// bind option 1
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Ukraine', 'London');

// bind option 2
// const printMessageBinded = printMessage.bind(user, 'Ukraine', 'London');
// printMessageBinded();

// bind option 3
// const printMessageBinded = printMessage.bind(user, 'Ukraine');
// printMessageBinded('London');

// out: func
function myBind(func, context, ...args) {
  // input: ...args
  // out: anything
  return function (...funcArgs) {
    console.log('func is called');
    return func.call(context, ...args, ...funcArgs);
  };
}

const context = {
  a: 100,
  b: 40,
};

function sum(c, d) {
  console.log('context is ', this);
  console.log('args are ', arguments);
  return this.a + this.b + c + d;
}

const sumBinded1 = myBind(sum, context);
console.log(sumBinded1);
console.log(sumBinded1(10, 30));

const sumBinded2 = myBind(sum, context, 10, 30);
console.log(sumBinded2);
console.log(sumBinded2());

const sumBinded3 = myBind(sum, context, 10);
console.log(sumBinded3);
console.log(sumBinded3(30));
