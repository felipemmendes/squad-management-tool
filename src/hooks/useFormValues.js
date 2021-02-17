import { useState } from 'react';

const useFormValues = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, changeType } = event.target;
    if (changeType === 'addArr') {
      setValues((oldState) => {
        const newArr = [...oldState[name], value];
        return {
          ...oldState,
          [name]: newArr,
        };
      });
    } else if (changeType === 'removeArr') {
      setValues((oldState) => {
        const newArr = [...oldState[name]].slice(oldState[name].length - 1, 1);

        return {
          ...oldState,
          [name]: newArr,
        };
      });
    } else if (changeType === 'dataDrop') {
      setValues((oldState) => {
        const { position } = event.target;
        return {
          ...oldState,
          [name]: {
            ...oldState.players,
            [position]: value,
          },
        };
      });
    } else if (changeType === 'changeField') {
      setValues((oldState) => {
        const { clearField } = event.target;
        console.log(event.target.value);
        return {
          ...oldState,
          [name]: value,
          [clearField]: {},
        };
      });
    } else {
      setValues((oldState) => ({
        ...oldState,
        [name]: value,
      }));
    }
  };

  const resetFieldValue = (name) => {
    setValues((oldState) => ({ ...oldState, [name]: '' }));
  };

  return {
    fieldValues: values,
    setFieldValues: handleChange,
    resetFieldValue,
    fieldErrors: errors,
    setFieldErrors: setErrors,
  };
};

export default useFormValues;
