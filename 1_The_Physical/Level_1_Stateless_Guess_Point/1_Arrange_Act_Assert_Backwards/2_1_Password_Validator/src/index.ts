type ErrorCode = 'InvalidLength' | 'NoDigitsContains' | 'NoUppercaseLettersContains';
export class PasswordValidator {
    public static validate(input: string): { result: boolean; errors: ErrorCode[]} {
        return {
            result: false,
            errors: ['InvalidLength'],
        }
    }
}