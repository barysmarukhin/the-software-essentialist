export type ErrorCode = 'InvalidLength' | 'NoDigitContains' | 'NoUppercaseLettersContains';

export class PasswordValidator {
    public static validate(input: string): { result: boolean; errors: ErrorCode[]} {
        const errors: ErrorCode[] = []
        const isLengthValid = input.length >= 5 && input.length <= 15
        const containsDigit = input.split('').some(character => !isNaN(Number(character)))
        const containsUppercaseLetter = /[A-Z]/.test(input)

        if(!isLengthValid) errors.push('InvalidLength')
        if(!containsDigit) errors.push('NoDigitContains')
        if(!containsUppercaseLetter) errors.push('NoUppercaseLettersContains')

        return {
            result: errors.length === 0,
            errors,
        }
    }
}