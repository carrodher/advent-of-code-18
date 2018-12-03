function processData(claimDefinitionsList) {
  // Create empty fabric matrix
  const fabric = new Array(1000);
  for (let i = 0; i < fabric.length; i += 1) {
    fabric[i] = new Array(1000);
    for (let j = 0; j < fabric.length; j += 1) {
      fabric[i][j] = 0;
    }
  }
  const claimsData = [];
  const claimIDsList = [];
  claimDefinitionsList.forEach((claimDefiniton, index) => {
    const regex = /#(.{0,4}) @ (.{0,3}),(.{0,3}): (.{0,3})x(.{0,3})/gm;
    const match = regex.exec(claimDefiniton);
    claimsData[index] = {
      id: parseInt(match[1], 10),
      left: parseInt(match[2], 10),
      top: parseInt(match[3], 10),
      width: parseInt(match[4], 10),
      height: parseInt(match[5], 10),
      coordenates: [],
    };

    for (let i = claimsData[index].width; i > 0; i -= 1) {
      for (let j = claimsData[index].height; j > 0; j -= 1) {
        const y = claimsData[index].top + j - 1;
        const x = claimsData[index].left + i - 1;
        fabric[y][x] += 1;
        claimsData[index].coordenates.push(`${x},${y}`);
      }
    }
    claimIDsList.push(claimsData[index].id);
  });
  return [claimsData, claimIDsList, fabric];
}

function getCoincidentInches(claimDefinitionsList) {
  const fabric = processData(claimDefinitionsList)[2];
  let coincidentInches = 0;
  for (let i = 0; i < fabric.length; i += 1) {
    for (let j = 0; j < fabric.length; j += 1) {
      if (fabric[i][j] >= 2) coincidentInches += 1;
    }
  }
  return coincidentInches;
}

function getIDWithoutCoincidence(claimDefinitionsList) {
  const claimsData = processData(claimDefinitionsList)[0];
  const claimIDsList = processData(claimDefinitionsList)[1];
  const claimsDataCopy = claimsData;
  claimsDataCopy.forEach((copy) => {
    claimsData.forEach((claim) => {
      if (copy.id !== claim.id && claimIDsList.includes(copy.id)) {
        let stop = false;
        for (let i = 0; i < copy.coordenates.length && !stop; i += 1) {
          if (claim.coordenates.includes(copy.coordenates[i]) === true) {
            stop = true;
            claimIDsList.splice(claimIDsList.indexOf(copy.id), 1);
          }
        }
      }
    });
  });

  return claimIDsList[0];
}

module.exports.getCoincidentInches = getCoincidentInches;
module.exports.getIDWithoutCoincidence = getIDWithoutCoincidence;
