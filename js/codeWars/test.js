const positiveSum = arr => arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);

// !===================================================
const myLanguages = results =>
	Object.keys(results)
		.filter(key => results[key] >= 60)
		.sort((a, b) => results[a] - results[b]);

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));
console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 }));

// !===================================================
function divisors(integer) {
	const result = [];
	for (let num = 2; num <= integer / 2; num += 1) {
		if (integer % num === 0) {
			result.push(num);
		}
	}

	return result.length ? result : `${integer} is prime`;
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), '13 is prime');
