// some helper functions to run calculations

/** select a reward from a loot table */
function rollForReward(table) {
  let rewardTypes = Object.keys(table);

  let i = 0;
  let roll = Math.random();
  while (roll > table[rewardTypes[i]]) {
    roll -= table[rewardTypes[i]];
    i++;
  }
  return rewardTypes[i];
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

for (let trial = 0; trial < 10; trial++) {
  console.log("trial ", trial, ":  ", rollForReward(table2));
}
