import {
  CustomValidationError,
  normalizeValidationError,
  validateFormValues,
} from './validateFormValues';
import * as yup from 'yup';

describe('validateFormValues util', () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
  });

  it('should not throw an error when values match schema', async () => {
    expect.assertions(2);

    await expect(
      validateFormValues({ schema, values: { name: 'John Doe' } })
    ).resolves.not.toThrow();

    await expect(
      validateFormValues({ schema, values: { name: 'Jane Doe' } })
    ).resolves.not.toThrow();
  });

  it('should throw a custom error when values do not match schema', async () => {
    expect.assertions(2);

    await expect(
      validateFormValues({ schema, values: { name: '' } })
    ).rejects.toThrow(CustomValidationError);

    await expect(
      validateFormValues({ schema, values: { email: 'john@doe.com' } })
    ).rejects.toThrow(CustomValidationError);
  });

  it('should normalize errors comming from yup', async () => {
    expect.assertions(1);

    let err;

    try {
      await schema.validate({ name: '' }, { abortEarly: false });
    } catch (e) {
      err = e;
    }

    expect(normalizeValidationError(err)).toEqual({
      name: 'name is a required field',
    });
  });
});
