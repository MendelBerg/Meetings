const positiveSum = arr => arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);

//* 1. create result arr
//* 2. iterate numbers from 2 to integer/2
//* 3. if integer % number === 0 => push in result arr
//* 4. if result.length ? result : `${integer} is prime`

function divisors(integer) {
	// const result = [];
	// for (let index = 2; index <= integer / 2; index += 1) {
	// 	if (integer % index === 0) {
	// 		result.push(index);
	// 	}
	// }

	returArray.fill(integer / 2).filter(el => integer % el === 0);

	return result.length ? result : `${integer} is prime`;
}
