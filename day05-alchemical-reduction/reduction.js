const sample = 'dabAcCaCBAcCcaDA'.split('');

function getRemainingPolymer(polymer) {
  let end;
  let found;
  const newLength = [];
  newLength[0] = 0;
  for (let i = 0; !end; i += 1) {
    found = false;
    for (let j = 0; j < polymer.length && !found; j += 1) {
      const firstLetter = polymer[j];
      const secondLetter = polymer[j + 1];
      if (firstLetter !== secondLetter && secondLetter != null && (firstLetter.toUpperCase() === secondLetter || firstLetter === secondLetter.toUpperCase())) {
        polymer.splice(j, 2);
        found = true;
      }
    }
    newLength[i] = polymer.length;
    if (newLength[i] === newLength[i - 1]) end = true;
  }

  return polymer;
}

function getMinLengthOfReducedPolymer(polymer) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const result = [];
  alphabet.forEach((letter, index) => {
    const copyPolymer = polymer.slice();
    let deleted = false;
    for (let i = 0; i < copyPolymer.length; i += 1) {
      if (copyPolymer[i] === letter || copyPolymer[i] === letter.toUpperCase()) {
        copyPolymer.splice(i, 1);
        deleted = true;
      }
      // In case there are two letters together (splice move the index)
      if (copyPolymer[i - 1] === letter || copyPolymer[i - 1] === letter.toUpperCase()) {
        copyPolymer.splice(i - 1, 1);
        deleted = true;
      }
    }
    if (deleted) result[index] = getRemainingPolymer(copyPolymer).length;
  });

  return Math.min(...result);
}

module.exports.getRemainingPolymer = getRemainingPolymer;
module.exports.getMinLengthOfReducedPolymer = getMinLengthOfReducedPolymer;
