/**
 * Calculate  the resulting frequency after all of the changes in frequency
 * have been applied
 * @param  {Number[]} frequencyChanges Array of diffs frequencies
 * @return {Int}                       Frequency after all of the changes
 */
function calculateFrequency(frequencyChanges) {
  let frequency = 0;

  for (let i = 0; i < frequencyChanges.length; i += 1) {
    frequency += frequencyChanges[i];
  }
  return frequency;
}

/**
 * Calculate the first frequency the device reaches twice
 * @param  {Number[]} frequencyChanges Array of diffs frequencies
 * @return {Int}                       Frequency reached twice
 */
function findRepeatedFrequency(frequencyChanges) {
  const frequencyToCompare = [];
  let iterativeFrequency = 0;
  let j = 1;
  let repetitionFound = false;

  while (!repetitionFound) {
    frequencyToCompare[0] = 0;
    for (let i = 0; i < frequencyChanges.length && !repetitionFound; i += 1) {
      iterativeFrequency += frequencyChanges[i];
      if (frequencyToCompare.indexOf(iterativeFrequency) > -1) {
        repetitionFound = true;
      } else {
        frequencyToCompare[j] = iterativeFrequency;
      }
      j += 1;
    }
  }
  return iterativeFrequency;
}

module.exports.calculateFrequency = calculateFrequency;
module.exports.findRepeatedFrequency = findRepeatedFrequency;
