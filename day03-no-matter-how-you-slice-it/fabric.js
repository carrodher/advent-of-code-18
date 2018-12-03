const fs = require('fs');

const input = fs.readFileSync('day_1/input.txt').toString().split('\n');
// const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
const fabric = new Array(1000);

for (let i = 0; i < fabric.length; i += 1) {
  fabric[i] = new Array(1000);
  for (let j = 0; j < fabric.length; j += 1) {
    fabric[i][j] = 0;
  }
}
const claims = [];
input.forEach((claim, index) => {
  const regex = /#(.{0,4}) @ (.{0,3}),(.{0,3}): (.{0,3})x(.{0,3})/gm;
  const match = regex.exec(claim);
  claims[index] = {
    id: parseInt(match[1]),
    left: parseInt(match[2]),
    top: parseInt(match[3]),
    width: parseInt(match[4]),
    height: parseInt(match[5]),
  };

  for (let i = claims[index].width; i > 0; i -= 1) {
    for (let j = claims[index].height; j > 0; j -= 1) {
      fabric[claims[index].top + j - 1][claims[index].left + i - 1] += 1;
    }
  }
});

let count = 0;
for (let i = 0; i < fabric.length; i += 1) {
  for (let j = 0; j < fabric.length; j += 1) {
    if (fabric[i][j] >= 2) count += 1;
  }
}
