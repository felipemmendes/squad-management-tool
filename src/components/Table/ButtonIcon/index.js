import * as S from './styles';

const ButtonIcon = ({ onClick, tooltip, icon }) => {
  return (
    <S.Container tooltip={tooltip} onClick={onClick}>
      {icon}
    </S.Container>
  );
};

export default ButtonIcon;
