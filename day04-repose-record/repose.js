function createEmptyMinuteArray() {
  const array = [];
  for (let i = 0; i < 60; i += 1) {
    array[i] = 0;
  }

  return array;
}

function processData(recordsOrdered) {
  const asleepTime = {}; // Object guardID: minutesSleeping
  const minutesDistribution = {}; // Object guardID: minutes[]
  const regexResult = []; // Regex result per line in the input
  let guard = 0; // Guard that has the most minutes asleep
  recordsOrdered.forEach((record, i) => {
    const regexShift = /\[(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})\] Guard #(\d{1,4}) begins shift/gm;
    const regexAsleep = /\[(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})\] falls asleep/gm;
    const regexWakeUp = /\[(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})\] wakes up/gm;
    const matchShift = regexShift.exec(record);
    const matchAsleep = regexAsleep.exec(record);
    const matchWakeUp = regexWakeUp.exec(record);
    // [1] año | [2] mes | [3] día | [4] hora | [5] min (| [6] ID)

    if (matchShift !== null) {
      regexResult[i] = matchShift;
      guard = parseInt(matchShift[6], 10);
      if (asleepTime[guard] === undefined) {
        asleepTime[guard] = 0;
      }
      if (minutesDistribution[guard] === undefined) {
        minutesDistribution[guard] = createEmptyMinuteArray();
      }
    } else if (matchAsleep !== null) {
      regexResult[i] = matchAsleep;
    } else if (matchWakeUp !== null) {
      regexResult[i] = matchWakeUp;
      const sleepMinute = parseInt(regexResult[i - 1][5], 10);
      const wakeMinute = parseInt(regexResult[i][5], 10);
      const sleepingTime = wakeMinute - sleepMinute;
      const newMinutes = createEmptyMinuteArray();
      const minutes = minutesDistribution[guard];

      for (let j = 0; j < sleepingTime; j += 1) {
        newMinutes[sleepMinute + j] = 1;
      }

      for (let k = 0; k < minutes.length; k += 1) {
        minutes[k] += newMinutes[k];
      }

      asleepTime[guard] += sleepingTime;
      minutesDistribution[guard] = minutes;
    }
  });
  return [asleepTime, minutesDistribution];
}

function getAsleepTheMost(input) {
  let guard = 0;
  const asleepTime = processData(input)[0];
  const minutesDistribution = processData(input)[1];
  Object.keys(asleepTime).forEach((guardID) => {
    const hours = asleepTime[guardID];
    if (hours === Math.max(...Object.values(asleepTime))) guard = guardID;
  });
  const max = Math.max(...Object.values(minutesDistribution[guard]));
  return guard * minutesDistribution[guard].indexOf(max);
}

function getFrequentlyAsleepSameMinute(input) {
  let max = 0;
  let guard = 0;
  const minutesDistribution = processData(input)[1];
  Object.keys(minutesDistribution).forEach((guardID) => {
    const newMax = Math.max(...Object.values(minutesDistribution[guardID]));
    if (max < newMax) {
      guard = guardID;
      max = newMax;
    }
  });

  return guard * minutesDistribution[guard].indexOf(max);
}

module.exports.getAsleepTheMost = getAsleepTheMost;
module.exports.getFrequentlyAsleepSameMinute = getFrequentlyAsleepSameMinute;
