import { Link } from 'react-router-dom';
import * as S from './styles';

const Button = ({ icon, to }) => {
  return (
    <S.Container>
      <Link to={to}>{icon}</Link>
    </S.Container>
  );
};

export default Button;
