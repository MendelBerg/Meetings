'use strict';

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    console.log('CONTEXT OF START_TIMER IS ', this);

    // in: func, num(ms)
    // out: number (intervalId)
    // !lose case 2 (in callbacks)
    this.intervalId = setInterval(() => {
      // console.log('CONTEXT IS ', this);
      // console.log(this.getTime());
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {
    return `${this.minsPassed}:${
      this.secondsPassed < 10 ? '0' + this.secondsPassed : this.secondsPassed
    }`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

// console.log(timer);
// timer.startTimer();
// setTimeout(() => {
//   timer.stopTimer();
// }, 20000);

// !lose context case 1:
// const func = timer.startTimer;
// func();

// ex lose context
// console.log(
//   [1, 5, 10, 19].filter(
//     function (el) {
//       console.log('this ', this);
//       return el > 5;
//     }.bind({ name: 'hello' }),
//   ),
// );
