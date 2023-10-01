export type StatisticsOutput = Record<'min' | 'max' | 'avg' |'count', number>;
export const getStatistics = (input: number[]): StatisticsOutput => {
    return {
        min: NaN,
        max: NaN,
        avg: NaN,
        count: NaN,
    }
}