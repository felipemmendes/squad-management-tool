import * as S from './styles';

const SearchCard = ({ info }) => {
  return (
    <S.Container id={info.id}>
      <div>
        <p>
          <strong>Name:</strong>
          {info.name}
        </p>
        <p>
          <strong>Nationality:</strong>
          {info.nacionality}
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
