import * as S from './styles';

const Footer = ({ footerText }) => {
  return (
    <S.Container>
      <p>{footerText}</p>
    </S.Container>
  );
};

export default Footer;
