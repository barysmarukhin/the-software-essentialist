export class BooleanCalculator {
    static evaluateExpression(expression: 'TRUE' | 'FALSE'): boolean {
        const resultMap = {
            TRUE: true,
            FALSE: false,
        }

        return resultMap[expression];
    }
}