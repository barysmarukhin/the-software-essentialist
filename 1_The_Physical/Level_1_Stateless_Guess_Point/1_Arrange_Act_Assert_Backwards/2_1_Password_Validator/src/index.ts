export class PasswordValidator {
    public static validate(input: string) {
        return {
            result: false,
            errors: ['InvalidLength'],
        }
    }
}