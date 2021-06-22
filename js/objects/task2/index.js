// 1. Learn requirement +++
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// create new obj
// iterate arrays & add key-value to the object

// OPTION1

// function buildObject(keysList, valuesList) {
//   const obj = {};

//   for (let i = 0; i < keysList.length; i+=1) {
//     const key = keysList[i];
//     const value = valuesList[i];

//     console.log(`key is ${key}`);
//     console.log(`value is ${value}`);

//     Object.assign(obj, {[key]: value});
//   }

//   return obj;
// }

// OPTION2

// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     console.log(`STEP ${index}`);
//     console.log('acc is ', acc);
//     const value = valuesList[index];

//     return Object.assign(acc, { [key]: value });
//   }, {});
// }

// OPTION3 - etalon

// const buildObject = (keysList, valuesList) =>
//   keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});



// test data
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);
console.log(result);

const keys2 = [];
const values2 = [];
const result2 = buildObject(keys2, values2);
console.log(result2);


// keys
// input: obj
// output: arr

Object.keys();

// values
// input: obj
// output: arr
Object.values();

// values
// input: obj
// output: arr with arrays([key, value])
Object.entries();