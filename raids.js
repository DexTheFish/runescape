// Let us simulate playing the Chambers of Xeric raid.

// each raid awards points. 8,676 points make a 1% chance at obtaining a unique.

// the uniques are weighted differently.

const raidLoot = (points) => {
  const uniqueChance = points / 867600;
  console.log("chance of unique: ", uniqueChance * 100);
  const roll = Math.random() < uniqueChance;
  if (roll) {
    return "purple";
  }
};

const simulateRaids = (pointsAverage, n) => {
  // return an array of uniques by simulating the completion of n raids
  let uniques = [];
  for (let i = 0; i < n; i++) {
    let loot = raidLoot(pointsAverage);
    if (loot) {
      uniques.push(loot);
    }
  }
  console.log(uniques);
  return uniques;
};

simulateRaids(31000, 100);
