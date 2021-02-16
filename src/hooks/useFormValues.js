import { useState } from 'react';

const useFormValues = (initialValues) => {
  const [values, setValues] = useState(initialValues);

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
  };
};

export default useFormValues;
