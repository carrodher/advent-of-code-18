/**
* Calculate the number of each leter in a box ID
* @param  {String} boxID Letters string
* @return {Object}       Number of occurrences per letter
*/
function countLetters(boxID) {
  const alphabet = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  for (let i = 0; i < boxID.length; i += 1) {
    for (let j = 0; j < Object.keys(alphabet).length; j += 1) {
      if (boxID[i] === Object.keys(alphabet)[j]) {
        alphabet[Object.keys(alphabet)[j]] += 1;
      }
    }
  }
  return alphabet;
}

/**
* Calculate the checksum of a list
* @param  {String[]} boxIDsList List of boxes IDs
* @return {Int}                 Checksum
*/
function calculateChecksum(boxIDsList) {
  let two = 0;
  let three = 0;
  boxIDsList.forEach((boxID) => {
    const result = countLetters(boxID.split(''));
    let twoFound = false;
    let threeFound = false;
    for (let i = 0; i < Object.keys(result).length; i += 1) {
      if (!twoFound && result[Object.keys(result)[i]] === 2) {
        two += 1;
        twoFound = true;
      } else if (!threeFound && result[Object.keys(result)[i]] === 3) {
        three += 1;
        threeFound = true;
      }
    }
  });
  return two * three;
}

/**
* Find the common letters
* @param  {String[]} boxIDsList List of boxes IDs
* @return {String}              Common letters of the two correct box IDs
*/
function findCommonLetters(boxIDsList) {
  const boxIDsListCopy = boxIDsList;
  let stop = false;
  let result = [];
  for (let i = 0; i < boxIDsListCopy.length && !stop; i += 1) {
    for (let j = 0; j < boxIDsList.length && !stop; j += 1) {
      if (i !== j) {
        let count = 0;
        for (let k = 0; k < boxIDsListCopy[i].length && count < 2; k += 1) {
          if (boxIDsListCopy[i][k] !== boxIDsList[j][k]) {
            count += 1;
          }
        }
        if (count === 1) {
          stop = true;
          result = [boxIDsListCopy[i], boxIDsList[j]];
        }
      }
    }
  }
  return result[0].split('').filter(x => result[1].split('').includes(x)).join('');
}

module.exports.calculateChecksum = calculateChecksum;
module.exports.findCommonLetters = findCommonLetters;
