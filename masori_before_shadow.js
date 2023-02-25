/// what if 100k players do TOA until they get either full masori or a shadow?

function getOutcomes(numberOfPlayers) {
  let outcomes = [];
  for (let i = 0; i < numberOfPlayers; i++) {
    let hat = false;
    let body = false;
    let legs = false;
    let shadow = false;
    while (!(hat && body && legs) && !shadow) {
      let roll = Math.floor(Math.random() * 24) + 1;
      if (roll === 1) {
        hat = true;
      }
      if (roll === 2) {
        body = true;
      }
      if (roll === 3) {
        legs = true;
      }
      if (roll === 24) {
        shadow = true;
      }
    }
    if (hat && body && legs) {
      outcomes.push("Masori");
    }
    if (shadow) {
      outcomes.push("Shadow");
    }
  }
  return outcomes;
}

function countMasori(outcomes) {
  return outcomes.filter((outcome) => outcome === "Masori").length;
}
function countShadow(outcomes) {
  return outcomes.filter((outcome) => outcome === "Shadow").length;
}

const numberOfPlayers = 100000;

const outcomes = getOutcomes(numberOfPlayers);
const masori = countMasori(outcomes);
const shadow = countShadow(outcomes);

console.log("-----------------------------------------");
console.log(`simulation size: ${numberOfPlayers} players`);
console.log("-----------------------------------------");
console.log(`-  ${masori} players finish full masori first`);
console.log(`-   ${shadow} players finish the shadow first`);
console.log("-----------------------------------------");
console.log(
  `approximate odds of finishing masori first: ${Math.round(
    (100 * masori) / numberOfPlayers,
    1
  )} %`
);

//console.log(countMasori(outcomes), countShadow(outcomes));
