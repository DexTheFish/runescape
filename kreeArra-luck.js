let numberOfPlayers = 1000000
let killCount = 1160;
let arr = [];
for (let i = 0; i < numberOfPlayers; i++) {
  let drops = [];
  for (let kill = 0; kill < killCount; kill++) {
    let rollForDrops = Math.floor(Math.random()*384);
    if (rollForDrops === 0) {
      drops.push('helmet');
    }
    if (rollForDrops === 1) {
      drops.push('chestplate');
    }
    if (rollForDrops === 2) {
      drops.push('chainskirt');
    }
  }
  arr.push(drops);
}
console.log(arr);

function countComponents(drops) {
  total = 0;
  for (let drop of drops) {
    if (drop === 'helmet') {
      total += 1;
    }
    if (drop === 'chestplate') {
      total += 4;
    }
    if (drop === 'chainskirt') {
      total += 3;
    }
  }
  return total;
}

let totalComponents = arr.map(drops => countComponents(drops)).sort((a,b) => a - b);
console.log(arr);
console.log(totalComponents.slice(0,100));

const countObj = {};

for (const num of totalComponents) {
  if (countObj.hasOwnProperty(num)) {
    countObj[num] += 1;
  } else {
    countObj[num] = 1;
  }
}

console.log(countObj);

let averageComponents = totalComponents.reduce((prev,cur) => prev + cur, 0) / totalComponents.length

console.log("average components:", averageComponents);

