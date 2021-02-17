import { useSelector } from 'react-redux';

import { getNameInitials } from '../../../utils/getNameInitials';
import * as S from './styles';

const SearchCard = ({ info }) => {
  const selected = useSelector((state) =>
    state.players.selected.find((p) => p === info.player_id)
  );

  const handleDrag = (event) => {
    event.dataTransfer.dropEffect = 'copy';
    const playerInitials = getNameInitials(info.player_name);
    event.dataTransfer.setData(
      'text/plain',
      JSON.stringify({
        id: info.player_id,
        name: info.player_name,
        initials: playerInitials,
        age: info.age,
        nationality: info.nationality,
      })
    );
  };

  return (
    <S.Container
      id={info.player_id}
      draggable={!selected}
      onDragStart={handleDrag}
      disabled={!!selected}
    >
      <div>
        <p>
          <strong>Name:</strong>
          {info.player_name}
        </p>
        <p>
          <strong>Nationality:</strong>
          {info.nationality}
        </p>
      </div>
      <div>
        <p>
          <strong>Age:</strong>
          {info.age}
        </p>
      </div>
    </S.Container>
  );
};

export default SearchCard;
