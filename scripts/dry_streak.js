// suppose we send n raids at m% purple chance per raid
// we want to analyze the dry streaks

function rollForLoot(m) { // roll 1 chest at m%
  const roll = Math.random();
  if (roll < m / 100) {
    return true;
  }
  return false;
}

function loot(m,n) {  // roll n chests at m%
  const loot = [];
  for (let i = 0; i < n; i++) {
    if (rollForLoot(m)) {
      loot.push(i)
    }
  }
  return loot;
}

function longestDryStreak(m, n) { // longest dry streak in the sample
  const loot = loot(m,n);
  let streaks = 0;
  for (let i = 0; i < loot.length; i++) {

  }

}


console.log(loot(5, 100));