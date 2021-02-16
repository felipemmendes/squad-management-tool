import { Link } from 'react-router-dom';
import * as S from './styles';

const Button = ({ icon: Icon, to }) => {
  return (
    <S.Container>
      <Link to={to}>
        <Icon />
      </Link>
    </S.Container>
  );
};

export default Button;
