// Your task is to process a sequence of integer numbers to determine the following statistics:
// Without using system Math library functions, process a sequence of integers to determine the following statistics:
// minimum value, maximum value, number of elements in the sequence, average value
// For example: [2, 4, 21, -8, 53, 40]


/*
    result { min, max, avg, count }
    assert that min works
    assert that max works
    assert that avg works
    assert that count works
    assert that all four output props exist and have correct values
* */

import { getStatistics } from './index';

describe('stats calculator', () => {
    it.each`
        input                           | min
        ${[2, 4, 21, -8, 53, 40]}       | ${-8}
        ${[0, 4, -100, -8, 533, 40]}    | ${-100}
    `('returns min value', ({ input, min }) => {
        expect(getStatistics(input).min).toBe(min);
    });

    it.each`
        input                           | max
        ${[2, 4, 21, -8, 53, 40]}       | ${53}
        ${[0, 4, -100, -8, 533, 40]}    | ${533}
    `('returns max value', ({ input, max }) => {
        expect(getStatistics(input).max).toBe(max);
    })
})
