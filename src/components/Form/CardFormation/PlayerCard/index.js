import { FaPlus } from 'react-icons/fa';

import * as S from './styles';

const PlayerCard = ({ player, id, handleDrop, handleDragOver }) => {
  return (
    <S.Container
      id={id}
      onDrop={(event) => handleDrop(event, id)}
      onDragOver={handleDragOver}
      hasPlayer={!!player}
      player={player}
    >
      {player ? (
        <S.Player>{player.initials}</S.Player>
      ) : (
        <FaPlus title="drag player" />
      )}
    </S.Container>
  );
};

export default PlayerCard;
