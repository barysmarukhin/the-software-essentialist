export type ErrorCode = 'InvalidLength' | 'NoDigitsContains' | 'NoUppercaseLettersContains';

export class PasswordValidator {
    public static validate(input: string): { result: boolean; errors: ErrorCode[]} {
        const errors: ErrorCode[] = [];
        const isLengthValid = input.length >= 5 && input.length <= 15;
        const containsDigit = input.split('').some(character => !isNaN(Number(character)))

        if(!isLengthValid) errors.push('InvalidLength')
        if(!containsDigit) errors.push('NoDigitsContains')

        return {
            result: errors.length === 0,
            errors,
        }
    }
}