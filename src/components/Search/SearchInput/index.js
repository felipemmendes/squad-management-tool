import * as S from './styles';

const SearchInput = ({ label, name, inputId, value, onChange }) => {
  return (
    <S.SearchLabel htmlFor={inputId}>
      {label}
      <S.SearchInput
        id={inputId}
        type="search"
        name={name}
        onChange={onChange}
        value={value}
      />
    </S.SearchLabel>
  );
};

export default SearchInput;
