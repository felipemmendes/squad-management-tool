import SearchCard from './SearchCard';
import SearchInput from './SearchInput';

import * as S from './styles';

const results = [
  { id: 1, name: 'Cristiano Ronaldo', age: '32', nacionality: 'Portugal' },
  { id: 2, name: 'Ronaldo Luiz de Alves', age: '28', nacionality: 'Brazil' },
  {
    id: 3,
    name: 'Ronaldo da Silva de Souza',
    age: '18',
    nacionality: 'Brazil',
  },
];

const Search = ({ label, name, inputId }) => {
  return (
    <S.Container>
      <SearchInput label={label} name={name} inputId={inputId} />
      {results.map((result) => (
        <SearchCard key={result.name} info={result} />
      ))}
    </S.Container>
  );
};

export default Search;
