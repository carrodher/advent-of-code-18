const expect = require('chai').expect;
const fs = require('fs');
const red = require('../day05-alchemical-reduction/reduction.js');

const sample = 'dabAcCaCBAcCcaDA'.split('');
const input = fs.readFileSync('day05-alchemical-reduction/input.txt').toString().split('');

describe('Day 05 - Alchemical Reduction', () => {
  describe('How many units remain after fully reacting the polymer?', () => {
    it('Example polymer should return 10', () => {
      const result = red.getRemainingPolymer(sample).length;
      expect(result).to.equal(10);
    });

    it('Input polymer should return 9288', () => {
      const result = red.getRemainingPolymer(input).length;
      expect(result).to.equal(9288);
    });
  });

  describe('Length of the shortest polymer removing all units of exactly one type?', () => {
    it('Example polymer should return 4', () => {
      const result = red.getMinLengthOfReducedPolymer(sample);
      expect(result).to.equal(4);
    });

    it('Input polymer should return 5844', () => {
      const result = red.getMinLengthOfReducedPolymer(input);
      expect(result).to.equal(5844);
    });
  });
});
