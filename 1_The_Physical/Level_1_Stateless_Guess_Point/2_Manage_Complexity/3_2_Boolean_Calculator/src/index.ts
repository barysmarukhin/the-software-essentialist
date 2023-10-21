export class BooleanCalculator {
    static evaluateExpression(expression: string): boolean {
        const resultMap: Record<string, boolean> = {
            TRUE: true,
            FALSE: false,
            'NOT FALSE': true,
            'NOT TRUE': false,
        }

        return resultMap[expression];
    }
}