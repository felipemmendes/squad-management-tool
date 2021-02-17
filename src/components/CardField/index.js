import { useMemo } from 'react';
import { getNameInitials } from '../../utils/getNameInitials';
import { sortPlayersByPicked } from '../../utils/sortPlayersByPicked';
import * as S from './styles';

const CardField = ({ pickedPlayers }) => {
  const { leastPicked, mostPicked } = useMemo(
    () => sortPlayersByPicked(pickedPlayers),
    [pickedPlayers]
  );

  return (
    <S.Container>
      <S.Side>
        Most picked player
        <S.Player>
          {mostPicked.length ? (
            <>
              <S.Avatar>{getNameInitials(mostPicked[0])}</S.Avatar>
              <S.Picked>{mostPicked[2]}</S.Picked>
            </>
          ) : (
            <S.Avatar isEmpty />
          )}
        </S.Player>
      </S.Side>
      <S.Side>
        Least picked player
        <S.Player>
          {leastPicked.length ? (
            <>
              <S.Avatar>{getNameInitials(leastPicked[0])}</S.Avatar>
              <S.Picked>{leastPicked[2]}</S.Picked>
            </>
          ) : (
            <S.Avatar isEmpty />
          )}
        </S.Player>
      </S.Side>
    </S.Container>
  );
};

export default CardField;
