import * as S from './styles';

const Card = ({ title, button, children }) => {
  return (
    <S.Container>
      <S.Title>
        <h1>{title}</h1>
        {button}
      </S.Title>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Card;
