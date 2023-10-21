import { BooleanCalculator } from './index'
// Create a boolean calculator that takes a boolean expression (as a string) and evaluates it to compute the correct output boolean result
//
// 1. Single values
//
// "TRUE" -> true
// "FALSE" -> false
//
// 2. NOT operator
//
// "NOT TRUE" -> false
//
// 3. AND operator
//
// "TRUE AND FALSE" -> false
// "TRUE AND TRUE" -> true
//
// 4. OR operator
//
// "TRUE OR FALSE" -> true
// "FALSE OR FALSE" -> false
//
// 5. Combination of operators w/ precedence
//
// It should allow you to provide any combination of the operators, but it should give precedence in this order:
//
//     NOT
// AND
// OR
//
// "TRUE OR TRUE OR TRUE AND FALSE" -> true
// "TRUE OR FALSE AND NOT FALSE" -> true
//
// 6. Parenthesis
//
// "(TRUE OR TRUE OR TRUE) AND FALSE" -> false
// "NOT (TRUE AND TRUE)" -> false
describe('boolean calculator', () => {
    it.each(
        [['TRUE', true],
            ['FALSE', false]]
    )('single operator "%s" should result into %s', (operator, result) => {
        expect(BooleanCalculator.evaluateExpression(operator)).toBe(result);
    })
})
