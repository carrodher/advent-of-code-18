const expect = require('chai').expect;
const fs = require('fs');
const inv = require('../day02-inventory-management-system/inventory.js');

const input = fs.readFileSync('day02-inventory-management-system/input.txt').toString().split('\n');

describe('Day 02 - Inventory management system tests', () => {
  describe('Checksum match', () => {
    it('Example box IDs list should return 12', () => {
      const checksum = inv.calculateChecksum(['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']);
      expect(checksum).to.equal(12);
    });

    it('Input file box IDs list should return 8610', () => {
      const checksum = inv.calculateChecksum(input);
      expect(checksum).to.equal(8610);
    });
  });

  describe('Common letters match', () => {
    it('Example box IDs list should return "fgij"', () => {
      const commonLetters = inv.findCommonLetters(['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz']);
      expect(commonLetters).to.equal('fgij');
    });

    it('Input file box IDs list should return "iosnxmfkpabcjpdywvrtahluy"', () => {
      const commonLetters = inv.findCommonLetters(input);
      expect(commonLetters).to.equal('iosnxmfkpabcjpdywvrtahluy');
    });
  });
});
