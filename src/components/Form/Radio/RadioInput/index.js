import * as S from './styles';

const RadioInput = ({
  label,
  name,
  id,
  value,
  onChange,
  checked,
  hasError,
}) => {
  return (
    <S.Container htmlFor={id} isChecked={checked === value} hasError={hasError}>
      <div>
        <S.Radio
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onClick={onChange}
          checked={checked === value}
        />
      </div>
      {label}
    </S.Container>
  );
};

export default RadioInput;
