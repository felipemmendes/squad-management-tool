import { useCallback, useState } from 'react';
import useFormValues from '../../../hooks/useFormValues';

import { validateFormValues } from '../../../utils/validateFormValues';
import { renderFormFieldChildren } from '../../../utils/renderFormFieldChildren';
import * as S from './styles';

const Form = ({ initialValues, schema, children }) => {
  const { fieldValues, setFieldValues, resetFieldValue } = useFormValues(
    initialValues
  );

  const [errors, setErrors] = useState({});

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setErrors({});

      try {
        await validateFormValues({ schema, fieldValues });
      } catch (error) {
        if (error.name === 'CustomValidationError') {
          setErrors(error.validationError);
        }
      }
    },
    [schema, fieldValues]
  );

  return (
    <S.Container onSubmit={handleSubmit}>
      {renderFormFieldChildren({
        children,
        values: fieldValues,
        errors,
        handleChange: setFieldValues,
        resetField: resetFieldValue,
      })}
    </S.Container>
  );
};

export default Form;
