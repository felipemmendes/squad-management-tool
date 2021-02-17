import { getNameInitials } from '../../utils/getNameInitials';
import * as S from './styles';

const Header = ({ logo, text, user }) => {
  const initials = getNameInitials(user.name);

  return (
    <S.Container>
      <S.AppInfo to="/">
        <img src={logo} alt={text} />
        {text}
      </S.AppInfo>
      <S.User>
        {user.name}
        <S.Avatar>{initials}</S.Avatar>
      </S.User>
    </S.Container>
  );
};

export default Header;
