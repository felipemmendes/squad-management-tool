import * as S from './styles';

const ButtonIcon = ({ onClick, tooltip, icon: Icon }) => {
  return (
    <S.Container tooltip={tooltip} onClick={onClick}>
      <Icon />
    </S.Container>
  );
};

export default ButtonIcon;
