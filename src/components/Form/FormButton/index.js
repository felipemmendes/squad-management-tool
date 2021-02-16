import * as S from './styles';

const FormButton = ({ type, children }) => {
  return <S.Container type={type}>{children}</S.Container>;
};

export default FormButton;
