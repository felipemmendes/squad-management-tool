import { useMemo } from 'react';

import PlayerCard from './PlayerCard';
import * as S from './styles';

const CardFormation = ({ name, value, onChange, formation }) => {
  const displayFormation = useMemo(() => {
    const displayFormation = formation.split(' - ');
    displayFormation.reverse();
    displayFormation.push(1);
    return displayFormation;
  }, [formation]);

  const handleDrop = (event, cardId) => {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData('text/plain'));

    onChange({
      target: {
        name,
        changeType: 'dataDrop',
        position: cardId,
        value: data,
      },
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <S.Container>
      {displayFormation.map((line, lineIdx) => {
        const lineNumber = parseInt(line, 10);
        const lineId = `${lineIdx}`;
        return (
          <S.Line id={lineId} key={lineId}>
            {[...Array(lineNumber)].map((_, playerIdx) => {
              const cardId = `${lineIdx}-${playerIdx}`;
              return (
                <PlayerCard
                  key={cardId}
                  id={cardId}
                  player={value[cardId]}
                  handleDrop={handleDrop}
                  handleDragOver={handleDragOver}
                />
              );
            })}
          </S.Line>
        );
      })}
    </S.Container>
  );
};

export default CardFormation;
