// we wish to acquire some amount of some item.
// let the chance of acquiring the item be 1/n
// let the quantity to be acquired be m
// simulate a large number of players
// for each player, we record the number of attempts to completion
// the data are summarised by reporting the average number of attempts,
// as well as the maximum and minimum, corresponding to the (un)luckiest players
// the analysis could be easily extended by implementing a box plot or histogram.

console.time('runtime');

const dropRate = 50;
const amountNeeded = 2;
const attemptsToCompletion = [];
const simulationSize = 100000;

for (let i=0; i < simulationSize; i++) {
  let attempts = 0;
  let obtained = 0;
  while (obtained < amountNeeded) {
    attempts += 1;
    let roll = Math.floor(Math.random()*dropRate);
    if (roll === 0) {
      obtained += 1;
    }
  }
  attemptsToCompletion.push(attempts);
}

const sumArray = function(arr) {
  let sum = 0;
  for (let a of arr) {
    sum += a;
  }
  return sum;
}

const maxArray = function(arr) {
  let max = arr[0];
  for (let a of arr) {
    if (a > max) {
      max = a;
    }
  }
  return max;
}

const minArray = function(arr) {
  let negativeArr = arr.map(a => -a);
  return -maxArray(negativeArr);
}

console.log("average: ", sumArray(attemptsToCompletion) / attemptsToCompletion.length);
console.log("minimum: ", minArray(attemptsToCompletion));
console.log("maximum: ", maxArray(attemptsToCompletion));


console.timeEnd('runtime');
