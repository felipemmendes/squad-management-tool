import * as S from './styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import logo from '../../assets/logo.svg';

const user = {
  name: 'John Doe',
  initials: 'JD',
};

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header user={user} logo={logo} text="Squad Managent Tool" />
      <S.Content>{children}</S.Content>
      <Footer footerText="2020 - All rights reserved" />
    </S.Container>
  );
};

export default Layout;
