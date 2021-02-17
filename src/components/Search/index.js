import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import useFormValues from '../../hooks/useFormValues';
import { clearQuery, searchPlayer } from '../../store';

import SearchCard from './SearchCard';
import SearchInput from './SearchInput';

import * as S from './styles';

const Search = ({ label, name, inputId }) => {
  const dispatch = useDispatch();
  const { results, loading } = useSelector((state) => state.players);
  const { fieldValues, setFieldValues } = useFormValues({ [name]: '' });

  useEffect(() => {
    if (fieldValues[name] === '') {
      dispatch(clearQuery);
    }

    const search = setTimeout(() => {
      dispatch(searchPlayer(fieldValues[name]));
    }, 500);

    return () => clearTimeout(search);
  }, [dispatch, name, fieldValues]);

  return (
    <S.Container>
      <SearchInput
        label={label}
        name={name}
        inputId={inputId}
        onChange={setFieldValues}
        value={fieldValues[name]}
      />
      <ul>
        {loading ? (
          <FaSpinner text="loading results" />
        ) : (
          results &&
          results.map((result) => (
            <SearchCard key={result.player_id} info={result} />
          ))
        )}
      </ul>
    </S.Container>
  );
};

export default Search;
