/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file, no-console */
class Sportsman {
	constructor(firstName) {
		// console.log('before: ', this);
		this.firstName = firstName;
		// console.log('after: ', this);
	}

	run() {
		setTimeout(() => {
			console.log(`${this.firstName} is running`);
		}, 3000);
	}

	swim() {
		console.log('Hello');
	}
}

class Swimmer extends Sportsman {
	constructor(firstName, swimStyle) {
		super(firstName);
		this.swimStyle = swimStyle;
		console.log(this);
	}

	swim() {
		console.log(`${this.firstName} is swimmig ${this.swimStyle}`);
	}
}

const obj = {
	firstName: 'Alex',
};

// test data
const sportsman1 = new Sportsman('John');
const sportsman2 = new Sportsman('Maria');
// const { run } = sportsman1;
// run();

// sportsman1.run();
// sportsman2.run();
// console.log(obj);
// console.log(sportsman1);

const swimmer1 = new Swimmer('Kolya', 'kakto-tak');
const swimmer2 = new Swimmer('Petro', 'ne kakto-tak');

// swimmer1.swim();
// swimmer1.run();
// swimmer2.swim();
// swimmer2.run();

// console.log(swimmer1);
// console.log(swimmer2);
