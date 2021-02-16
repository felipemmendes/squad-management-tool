import Button from './Button';
import * as S from './styles';

const Card = ({ title, to, hasButton, icon, children }) => {
  return (
    <S.Container>
      <S.Title>
        <h1>{title}</h1>
        {hasButton && <Button to={to} icon={icon} />}
      </S.Title>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Card;
