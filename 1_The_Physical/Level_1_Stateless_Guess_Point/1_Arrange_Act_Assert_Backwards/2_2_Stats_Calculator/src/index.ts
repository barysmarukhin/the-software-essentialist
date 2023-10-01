export type StatisticsOutput = Record<'min' | 'max' | 'avg' |'count', number>;

const getMinValue = (input: number[]) => input.reduce((prev, next) => prev < next ? prev : next)
const getMaxValue = (input: number[]) => input.reduce((prev, next) => prev > next ? prev : next)
export const getStatistics = (input: number[]): StatisticsOutput => {
    return {
        min: getMinValue(input),
        max: getMaxValue(input),
        avg: NaN,
        count: NaN,
    }
}