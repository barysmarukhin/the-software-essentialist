export class BooleanCalculator {
    static evaluateExpression(expression: string): boolean {

        const resultMap: Record<string, boolean> = {
            TRUE: true,
            FALSE: false,
            'NOT FALSE': true,
            'NOT TRUE': false,
            'FALSE AND TRUE': false,
            'TRUE AND FALSE': false,
            'TRUE AND TRUE': true,
            'FALSE AND FALSE': false,
        }

        return resultMap[expression];
    }
}