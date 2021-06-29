'use strict';
function myBind(func, context, ...args) {
  context.f = func;
  return function (...funcArgs) {
    return context.f(...args, ...funcArgs);
  };
}

const context = {
  a: 100,
  b: 40,
};

function sum(c, d) {
  return this.a + this.b + c + d;
}

const sumBinded1 = myBind(sum, context);
console.log(sumBinded1(10, 30));

const sumBinded2 = myBind(sum, context, 10, 30);
console.log(sumBinded2());

const sumBinded3 = myBind(sum, context, 10);
console.log(sumBinded3(30));
