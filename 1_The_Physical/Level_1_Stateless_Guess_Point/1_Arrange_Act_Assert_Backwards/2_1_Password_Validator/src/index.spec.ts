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
*   errors: ['InvalidLength', 'NoDigitsContains', 'NoUppercaseLettersContains']
* }
*
* */

import { PasswordValidator } from "./index";

describe('password validator', () => {
  it('knows that "hey" is not between 5 and 15 characters long', () => {
    const { result, errors } = PasswordValidator.validate('hey');

    expect(result).toBe(false);
    expect(errors).toHaveLength(1);
    expect(errors).toContain('InvalidLength');
  });

  it('knows that "hello it is me and I have been wondering" is not between 5 and 15 characters long', () => {
    const { result, errors } = PasswordValidator.validate('hello it is me and I have been wondering');

    expect(result).toBe(false);
    expect(errors).toHaveLength(1);
    expect(errors).toContain('InvalidLength');
  });
})


