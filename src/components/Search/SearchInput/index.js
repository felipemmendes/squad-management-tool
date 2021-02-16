import * as S from './styles';
import useFormValues from '../../../hooks/useFormValues';

const SearchInput = ({ label, name, inputId }) => {
  const { fieldValues, setFieldValues } = useFormValues({ [name]: '' });
  return (
    <S.SearchLabel htmlFor={inputId}>
      {label}
      <S.SearchInput
        id={inputId}
        type="text"
        name={name}
        onChange={setFieldValues}
        value={fieldValues[name]}
      />
    </S.SearchLabel>
  );
};

export default SearchInput;
