type ErrorCode = 'InvalidLength' | 'NoDigitsContains' | 'NoUppercaseLettersContains';
export class PasswordValidator {
    public static validate(input: string): { result: boolean; errors: ErrorCode[]} {
        const errors: ErrorCode[] = [];
        let result = true;
        const isLengthValid = input.length >= 5 && input.length <= 15;

        if(!isLengthValid) {
            result = false;
            errors.push('InvalidLength')
        }
        return {
            result,
            errors,
        }
    }
}