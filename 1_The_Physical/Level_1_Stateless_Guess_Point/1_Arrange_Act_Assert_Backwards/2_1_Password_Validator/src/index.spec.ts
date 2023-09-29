/*
* Between 5 and 15 characters long.
* Contains at least one digit.
* Contains at least one upper case letter.
*
* Return an object containing a boolean result
* and an errors key that
* — when provided with an invalid password
* — contains an error message or type for all errors in occurrence.
* There can be multiple errors at a single time.
*
* */

/*
*
* Incoming string: 'JohnDoe15'
* {
*   result: true,
*   errors: ['InvalidLength', 'NoDigitContains', 'NoUppercaseLettersContains']
* }
*
* */

import { ErrorCode, PasswordValidator } from "./index";

describe('password validator', () => {
  describe('checking between 5 and 15 characters long', () => {
    it.each<[string, boolean, ErrorCode[]]>([
          ['Hey1', false, ['InvalidLength']],
          ['H234567812345678_', false, ['InvalidLength']],
          ['helLo1', true, []],
        ]
    )('knows that "%s" should return %s', (input, result, errors) => {
      const output = PasswordValidator.validate(input);

      expect(output.result).toBe(result);
      expect(output.errors).toHaveLength(errors.length);
      expect(output.errors).toStrictEqual(errors);
    });
  });

  describe('checks for at least one digit', () => {
    it.each<[string, boolean, ErrorCode[]]>([
          ['Barys8', true, []],
          ['Barys', false, ['NoDigitContains']],
        ]
    )('knows that "%s" should return %s', (input, result, errors) => {
      const output = PasswordValidator.validate(input);

      expect(output.result).toBe(result);
      expect(output.errors).toHaveLength(errors.length);
      expect(output.errors).toStrictEqual(errors);
    });
  });

  describe('checks for at least one uppercase letter', () => {
    it.each<[string, boolean, ErrorCode[]]>([
          ['Barys8', true, []],
          ['barys8', false, ['NoUppercaseLettersContains']],
        ]
    )('knows that "%s" should return %s', (input, result, errors) => {
      const output = PasswordValidator.validate(input);

      expect(output.result).toBe(result);
      expect(output.errors).toHaveLength(errors.length);
      expect(output.errors).toStrictEqual(errors);
    });
  });
})


