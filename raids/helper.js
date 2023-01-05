// some helper functions to run calculations

/** select a reward from a loot table */
function roll(table) {
  let rewardTypes = Object.keys(table);
  let i = 0;
  let r = Math.random();
  while (r > table[rewardTypes[i]]) {
    r -= table[rewardTypes[i]];
    i++;
  }
  return rewardTypes[i];
}

const purpleTable = {
  dex: 20 / 69,
  arcane: 20 / 69,
  buckler: 4 / 69,
  dhcb: 4 / 69,
  bulwark: 3 / 69,
  hat: 3 / 69,
  top: 3 / 69,
  bottom: 3 / 69,
  claws: 3 / 69,
  maul: 2 / 69,
  kodai: 2 / 69,
  bow: 2 / 69,
};

/** simulate loot from a raid */
function raid(points) {
  const purpleChance = points / 876000;
  if (roll({ purple: purpleChance })) {
    return roll(purpleTable);
  }
}
/** simulate loot from n raids */
function raids(averagePoints, n) {
  let result = {};
  for (let i = 0; i < n; i++) {
    const loot = raid(averagePoints);
    if (loot) {
      result[loot] = result[loot] + 1 || 1;
    }
  }
  return result;
}
// tests
const table1 = {
  coins: 0.5,
  sword: 0.1,
  shield: 0.1,
  bow: 0.1,
  food: 0.2,
};
const table2 = {
  coins: 0.3,
};
console.log(raids(31000, 445));

//

module.exports = { roll, purpleTable, raid };
