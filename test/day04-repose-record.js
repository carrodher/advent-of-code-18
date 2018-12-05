const expect = require('chai').expect;
const fs = require('fs');
const rec = require('../day04-repose-record/repose.js');

const recordsFileOrdered = fs.readFileSync('day04-repose-record/input.txt').toString().split('\n').sort();

const sampleOrdered = [
  '[1518-11-01 00:00] Guard #10 begins shift',
  '[1518-11-01 00:05] falls asleep',
  '[1518-11-01 00:25] wakes up',
  '[1518-11-01 00:30] falls asleep',
  '[1518-11-01 00:55] wakes up',
  '[1518-11-01 23:58] Guard #99 begins shift',
  '[1518-11-02 00:40] falls asleep',
  '[1518-11-02 00:50] wakes up',
  '[1518-11-03 00:05] Guard #10 begins shift',
  '[1518-11-03 00:24] falls asleep',
  '[1518-11-03 00:29] wakes up',
  '[1518-11-04 00:02] Guard #99 begins shift',
  '[1518-11-04 00:36] falls asleep',
  '[1518-11-04 00:46] wakes up',
  '[1518-11-05 00:03] Guard #99 begins shift',
  '[1518-11-05 00:45] falls asleep',
  '[1518-11-05 00:55] wakes up',
];

describe('Day 04 - Repose record', () => {
  describe('What minute does that guard spend asleep the most? (guardID * minute)', () => {
    it('Example record list should return 240', () => {
      const result = rec.getAsleepTheMost(sampleOrdered);
      expect(result).to.equal(240);
    });

    it('Input file record list should return 60438', () => {
      const result = rec.getAsleepTheMost(recordsFileOrdered);
      expect(result).to.equal(60438);
    });
  });

  describe('which guard is most frequently asleep on the same minute? (guardID * minute)', () => {
    it('Example record list should return 4455', () => {
      const result = rec.getFrequentlyAsleepSameMinute(sampleOrdered);
      expect(result).to.equal(4455);
    });

    it('Input file record list should return 47989', () => {
      const result = rec.getFrequentlyAsleepSameMinute(recordsFileOrdered);
      expect(result).to.equal(47989);
    });
  });
});
