import * as S from './styles';
import RadioInput from './RadioInput';

const Radio = ({ name, label, radioOptions, checked, onChange, error }) => {
  return (
    <S.Container hasError={!!error}>
      <legend>{label}</legend>
      <div>
        {radioOptions.map((option) => (
          <RadioInput
            type="radio"
            key={option.id}
            id={option.id}
            name={name}
            value={option.value}
            label={option.label}
            onChange={onChange}
            checked={checked}
            hasError={!!error}
          />
        ))}
      </div>
    </S.Container>
  );
};

export default Radio;
