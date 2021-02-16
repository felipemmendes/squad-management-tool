import * as S from './styles';

const Label = ({ label, inputId, hasError, children }) => {
  return (
    <S.Container htmlFor={inputId} hasError={hasError}>
      {label}
      {children}
    </S.Container>
  );
};

export default Label;
