/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

const obj = {};
obj.name = 'Hello';

// console.log(obj);

// ==================

const newObj = new Object();
newObj.id = 100;

// console.log(newObj);

// ==================

// 1. add properties, build object
// 2. filter object

// input: obj, key(number, str, etc), value(number, str, etc)

// out: obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

const lazyTransaction = {
  value: 170,
};

console.log(addPropertyV1(lazyTransaction, 'lazyKey', 'lazyValue'));

const res1 = addPropertyV1({}, 'key', 123);
const res2 = addPropertyV1({}, 'key2', 321);

console.log(res1);
console.log(res2);

// =================

function addPropertyV2(obj, key, value) {
  // input: target obj, objects
  // out: obj
  return Object.assign(obj, { [key]: value });
}

const person = { 1: 'John' };
const obj222 = { name: 'TomTom' };
console.log(addPropertyV2(person, 'name', 'Tom'));
console.log(addPropertyV2(person, 'job', 'cleaner'));
console.log(addPropertyV2(obj222, 'job', 'cleaner'));

// =====================

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

// const obj222 = { name: 'TomTom' };

// console.log(addPropertyV3(obj222, 'job', 'cleaner'));

// ===========

const obj333 = { name: 'TomTom' };

console.log(addPropertyV3(obj333, 'name', 'cleaner'));

// ==============
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

console.log(addPropertyV4({ name: 'LzyBob', lastname: 'Lazy' }, 'age', 45));
