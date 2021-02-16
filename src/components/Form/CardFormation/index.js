import { useMemo } from 'react';
import { FaPlus } from 'react-icons/fa';

import * as S from './styles';

const CardFormation = ({ name, id, value, onChange, formation }) => {
  const displayFormation = useMemo(() => {
    const displayFormation = formation.split(' - ');
    displayFormation.reverse();
    displayFormation.push(1);
    return displayFormation;
  }, [formation]);

  return (
    <S.Container>
      {displayFormation.map((line, lineIdx) => {
        const lineNumber = parseInt(line, 10);
        const lineId = `line-${lineIdx}`;
        return (
          <S.Line id={lineId} key={lineId}>
            {[...Array(lineNumber)].map((player, playerIdx) => {
              const playerId = `player-${lineIdx}-${playerIdx}`;
              return (
                <S.Avatar id={playerId} key={playerId}>
                  <FaPlus />
                </S.Avatar>
              );
            })}
          </S.Line>
        );
      })}
    </S.Container>
  );
};

export default CardFormation;
