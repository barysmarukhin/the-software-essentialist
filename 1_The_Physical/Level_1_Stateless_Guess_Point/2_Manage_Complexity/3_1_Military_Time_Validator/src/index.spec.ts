import { isTimeRangeValid } from './index';

describe('military time validator', () => {
    it.each([
        ['00:00 - 23:59', true],
        ['01:30 - 14:32', true],
        ['12:00 - 13:30', true],
        ['22:15 - 22:45', true],
        ['03:00 - 14:10', true],
        ['00:05-23:59', true],
        ['00:00 - 24:00', false], // Invalid end time
        ['25:22 - 12:00', false], // Invalid start time
        ['01:30', false], // Missing end time
        ['12:00-12:34-12:59', false], // Too many times
    ])(`isTimeRangeValid: %s should be %p`, (timeRange, expected) => {
        expect(isTimeRangeValid(timeRange)).toBe(expected);
    });
})
