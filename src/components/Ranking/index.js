import { navigateToTeam } from '../../utils/navigateToTeam';

import * as S from './styles';

const Ranking = ({ caption, data }) => {
  return (
    <S.Container>
      <h2>{caption}</h2>
      <S.List>
        {data.map((d) => (
          <S.ListItem key={d.id} onClick={() => navigateToTeam(d.id)}>
            <p>{d.name}</p>
            <strong>{d.average}</strong>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};

export default Ranking;
