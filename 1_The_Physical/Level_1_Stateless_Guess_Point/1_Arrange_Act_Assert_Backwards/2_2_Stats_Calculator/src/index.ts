export type StatisticsOutput = Record<'min' | 'max' | 'avg' |'count', number>;

const getMinValue = (input: number[]) => input.reduce((prev, next) => prev < next ? prev : next)
const getMaxValue = (input: number[]) => input.reduce((prev, next) => prev > next ? prev : next)
const getAvgValue = (input: number[], decimalPlaces = 12) => {
    const sum = input.reduce((total, num) => total + num);
    const average = sum / input.length;

    return parseFloat(average.toFixed(decimalPlaces));
};
export const getStatistics = (input: number[]): StatisticsOutput => ({
        min: getMinValue(input),
        max: getMaxValue(input),
        avg: getAvgValue(input),
        count: input.length,
    }
)