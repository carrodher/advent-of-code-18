const expect = require('chai').expect;
const fs = require('fs');
const freq = require('../day01-chronal-calibration/frequency.js');

const input = fs.readFileSync('day01-chronal-calibration/input.txt').toString().split('\n').map(Number);

describe('Day 01 - Chronal calibration tests', () => {
  describe('Frequency match', () => {
    it('[+1, -2, +3, +1] should return 3', () => {
      const finalFrequency = freq.calculateFrequency([+1, -2, +3, +1]);
      expect(finalFrequency).to.equal(3);
    });

    it('[+1, +1, +1] should return 3', () => {
      const finalFrequency = freq.calculateFrequency([+1, +1, +1]);
      expect(finalFrequency).to.equal(3);
    });

    it('[+1, +1, -2] should return 0', () => {
      const finalFrequency = freq.calculateFrequency([+1, +1, -2]);
      expect(finalFrequency).to.equal(0);
    });

    it('[-1, -2, -3] should return -6', () => {
      const finalFrequency = freq.calculateFrequency([-1, -2, -3]);
      expect(finalFrequency).to.equal(-6);
    });

    it('Input file should return 576', () => {
      const finalFrequency = freq.calculateFrequency(input);
      expect(finalFrequency).to.equal(576);
    });
  });

  describe('Repeated frequency match', () => {
    it('[+1, -2, +3, +1] should return 2', () => {
      const repeatedFrequency = freq.findRepeatedFrequency([+1, -2, +3, +1]);
      expect(repeatedFrequency).to.equal(2);
    });

    it('[+1, -1] should return 0', () => {
      const repeatedFrequency = freq.findRepeatedFrequency([+1, -1]);
      expect(repeatedFrequency).to.equal(0);
    });

    it('[+3, +3, +4, -2, -4] should return 10', () => {
      const repeatedFrequency = freq.findRepeatedFrequency([+3, +3, +4, -2, -4]);
      expect(repeatedFrequency).to.equal(10);
    });

    it('[-6, +3, +8, +5, -6] should return 5', () => {
      const repeatedFrequency = freq.findRepeatedFrequency([-6, +3, +8, +5, -6]);
      expect(repeatedFrequency).to.equal(5);
    });

    it('[+7, +7, -2, -7, -4] should return 14', () => {
      const repeatedFrequency = freq.findRepeatedFrequency([+7, +7, -2, -7, -4]);
      expect(repeatedFrequency).to.equal(14);
    });

    it('Input file should return 77674', () => {
      const repeatedFrequency = freq.findRepeatedFrequency(input);
      expect(repeatedFrequency).to.equal(77674);
    });
  });
});
