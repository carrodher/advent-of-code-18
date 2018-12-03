const expect = require('chai').expect;
const fs = require('fs');
const fab = require('../day03-no-matter-how-you-slice-it/fabric.js');

describe('Day 03 - No matter how you slice it', () => {
  describe('Square inches of fabric are within two or more claims', () => {
    it('Example claim list should return 4', () => {
      const inches = fab.getCoincidentInches(['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2']);
      expect(inches).to.equal(4);
    });

    it('Input claim list should return 110891', () => {
      const input = fs.readFileSync('day03-no-matter-how-you-slice-it/input.txt').toString().split('\n');
      const inches = fab.getCoincidentInches(input);
      expect(inches).to.equal(110891);
    });
  });

  describe('ID of the only claim that doesn\'t overlap', () => {
    it('Example claim list should return 3', () => {
      const id = fab.getIDWithoutCoincidence(['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2']);
      expect(id).to.equal(3);
    });

    it('Input claim list should return 297', () => {
      const input = fs.readFileSync('day03-no-matter-how-you-slice-it/input.txt').toString().split('\n');
      const id = fab.getIDWithoutCoincidence(input);
      expect(id).to.equal(297);
    });
  });
});
