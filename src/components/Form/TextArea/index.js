import Label from '../Label';
import * as S from './styles';

const TextArea = ({ label, name, id, value, onChange, error }) => {
  return (
    <Label inputId={id} label={label} hasError={!!error}>
      <S.TextArea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      ></S.TextArea>
    </Label>
  );
};

export default TextArea;
