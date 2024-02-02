// this simulator is used to calculate the droprate of the Jewel of the Sun (Yellow Gem) empirically. 

// by simulating a large number of players completing the Tombs of Amascut until the gem is acquired, we get a good estimate for the droprate.

// the average killcount needed to acquire the gem is 120.




// roll for a gem
function rollForGem() {
  const roll = Math.floor(Math.random() * 60) ; 
  if (roll === 1) {
    return true;
  }
  return false;
}

function rollGemType() {
  return Math.floor(Math.random() * 3)
}

function giveGem(gemsToObtain) {
  const randomIndex = Math.floor(Math.random() * gemsToObtain.length);
  return gemsToObtain.slice(0, randomIndex).concat(gemsToObtain.slice(randomIndex + 1));
}


let numberOfPlayers = 10000;
let killcountToObtainYellow = [];
for (let i = 0; i < numberOfPlayers; i++) {
  let gemsToObtain = ['red', 'yellow', 'blue'];
  let kc = 0;
  while (gemsToObtain.includes('yellow')) {
    kc ++;
    if (rollForGem()) {
      gemsToObtain = giveGem(gemsToObtain);
    }
    }
  killcountToObtainYellow.push(kc);
  }

let sum = 0;
killcountToObtainYellow.forEach(x => sum += x)
let avg = sum / (numberOfPlayers)
console.log(avg)
console.log(killcountToObtainYellow)