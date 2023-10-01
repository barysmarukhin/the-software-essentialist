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
    `('returns min value for "$input"', ({ input, min }) => {
        expect(getStatistics(input).min).toBe(min);
    });

    it.each`
        input                           | max
        ${[2, 4, 21, -8, 53, 40]}       | ${53}
        ${[0, 4, -100, -8, 533, 40]}    | ${533}
    `('returns max value for "$input"', ({ input, max }) => {
        expect(getStatistics(input).max).toBe(max);
    })

    it.each`
        input                           | avg
        ${[2, 4, 21, -8, 53, 40]}       | ${18.666666666667}
        ${[0, 4, -100, -8, 533, 40]}    | ${78.166666666667}
    `('returns avg value for "$input"', ({ input, avg }) => {
        expect(getStatistics(input).avg).toBe(avg);
    })

    it.each`
        input                           | count
        ${[2, 4, 21, -8, 53, 40]}       | ${6}
        ${[0]}                          | ${1}
    `('returns count value for "$input"', ({ input, count }) => {
        expect(getStatistics(input).count).toBe(count);
    })

    it.each`
        input                           | min       | max       | count | avg
        ${[2, 4, 21, -8, 53, 40]}       | ${-8}     | ${53}     | ${6}  | ${18.666666666667}
        ${[0, 4, -100, -8, 533, 40]}    | ${-100}   | ${533}    | ${6}  | ${78.166666666667}
    `('returns min, max, avg and count values for "$input"', ({ input, avg, min, max, count }) => {
        expect(getStatistics(input)).toEqual({
            min,
            max,
            avg,
            count,
        });
    })

})
