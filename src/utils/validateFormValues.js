export class CustomValidationError extends Error {
  constructor(error) {
    super(error);
    this.name = 'CustomValidationError';
    this.validationError = error;
  }
}

export const normalizeValidationError = (validationError) => {
  const error = validationError.inner.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.path]: curr.message,
    };
  }, {});

  return error;
};

export const validateFormValues = async ({ schema, values }) => {
  try {
    await schema.validate(values, { abortEarly: false });
  } catch (error) {
    throw new CustomValidationError(normalizeValidationError(error));
  }
};
