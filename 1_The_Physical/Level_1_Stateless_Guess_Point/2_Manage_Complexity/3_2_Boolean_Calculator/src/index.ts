export class BooleanCalculator {
    static evaluateExpression(expression: string): boolean {
        const resultMap: Record<string, boolean> = {
            TRUE: true,
            FALSE: false,
        }

        return resultMap[expression];
    }
}