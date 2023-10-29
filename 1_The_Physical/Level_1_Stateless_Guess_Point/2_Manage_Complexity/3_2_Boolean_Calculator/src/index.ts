export class BooleanCalculator {
    static evaluateExpression(expression: string): boolean {

        const resultMap: Record<string, string | boolean> = {
            TRUE: 'true',
            FALSE: 'false',
            NOT: '!',
            AND: '&&',
            OR: '||',
            '(': '(',
            ')': ')',
        }

        const expressionTokens = expression.split(/(\(|\)|\s+)/).filter((token) => token.trim() !== '');

        if (!expressionTokens.every((token) => resultMap[token])) {
            throw new Error('Invalid expression');
        }

        const javascriptBooleanExpressionAsString = expressionTokens.reduce((acc, part) => {
            acc += resultMap[part];
            return acc;
        }, '')

        return eval(javascriptBooleanExpressionAsString);
    }
}