import Label from '../Label';
import * as S from './styles';

const Input = ({
  label,
  name,
  id,
  type = 'text',
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <Label inputId={id} label={label} hasError={!!error}>
      <S.Input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasError={!!error}
      />
    </Label>
  );
};

export default Input;
