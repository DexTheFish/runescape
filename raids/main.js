// Let us simulate playing the Chambers of Xeric raid.

// each raid awards points. 8,676 points make a 1% chance at obtaining a unique.

// the uniques are weighted differently.
// const { roll, purpleTable, raid, raids, sample } = require("./helper");

function purple() {
  let roll = Math.floor(Math.random() * 69);
  if (0 <= roll && roll < 20) {
    return "Dexterous prayer scroll";
  }
  if (20 <= roll && roll < 40) {
    return "Arcane prayer scroll";
  }
  if (40 <= roll && roll < 44) {
    return "Twisted Buckler";
  }
  if (44 <= roll && roll < 48) {
    return "Dragon hunter crossbow";
  }
  if (48 <= roll && roll < 51) {
    return "Dinh's Bulwark";
  }
  if (51 <= roll && roll < 54) {
    return "Ancestral Hat";
  }
  if (54 <= roll && roll < 57) {
    return "Ancestral top";
  }
  if (57 <= roll && roll < 60) {
    return "Ancestral robe";
  }
  if (60 <= roll && roll < 63) {
    return "Dragon claws";
  }
  if (63 <= roll && roll < 65) {
    return "Elder Maul";
  }
  if (65 <= roll && roll < 67) {
    return "Kodai Insignia";
  }
  if (67 <= roll && roll < 69) {
    return "Twisted bow";
  }
}

const raidLoot = (points) => {
  const uniqueChance = points / 867600;
  const roll = Math.random() < uniqueChance;
  if (roll) {
    return purple();
  }
};

const simulateRaids = (pointsAverage, n) => {
  // return an array of uniques by simulating the completion of n raids
  let uniques = [];
  for (let i = 0; i < n; i++) {
    if (pointsAverage / 867600 > Math.random()) {
      uniques.push(purple());
    }
  }
  return uniques.sort();
};

const simulateRaidsFromData = () => {
  let average = document.getElementById("average").value;
  let count = document.getElementById("count").value;
  document.getElementById("purples").innerHTML += simulateRaids(
    average,
    count
  ).join(", ");
};

const increaseRaidCounter = () => {
  let counter = document.getElementById("raidCounter");
  let count = counter.innerHTML;
  counter.innerHTML = Number(count) + 1 || 1;
};

const resetRaidCounter = () => {
  document.getElementById("raidCounter").innerHTML = "";
  document.getElementById("purples").innerHTML = "";
};

count = 0;
for (let i = 0; i < 40000; i++) {
  if (simulateRaids(29000, 445).includes("Dexterous prayer scroll")) {
    count++;
  }
}

console.log(
  "out of a 40,000 player trial, each completing 445 raids, how many got at least one Dex scroll? - ",
  count
);
console.log(`that is ${(100 * count) / 40000}% of players`);
// console.log(simulateRaids(31000, 100));
