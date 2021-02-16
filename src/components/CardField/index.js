import * as S from './styles';

const CardField = ({ mostPicked, leastPicked }) => {
  return (
    <S.Container>
      <S.Side>
        Most picked player
        <S.Player>
          <S.Avatar>{mostPicked.initials}</S.Avatar>
          <S.Picked>{mostPicked.picked}</S.Picked>
        </S.Player>
      </S.Side>
      <S.Side>
        Least picked player
        <S.Player>
          <S.Avatar>{leastPicked.initials}</S.Avatar>
          <S.Picked>{leastPicked.picked}</S.Picked>
        </S.Player>
      </S.Side>
    </S.Container>
  );
};

export default CardField;
