import { useCallback } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import * as S from './styles';

const Select = ({
  label,
  name,
  id,
  value,
  onChange,
  formationFor,
  selectOptions,
}) => {
  const handleChange = useCallback(
    (event) => {
      onChange({
        target: {
          name,
          value: event.target.value,
          changeType: 'changeField',
          clearField: formationFor,
        },
      });
    },
    [formationFor, onChange, name]
  );

  return (
    <S.Container htmlFor={id}>
      {label}
      <S.SelectGroup>
        <S.Select id={id} name={name} onChange={handleChange} value={value}>
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </S.Select>
        <div>
          <FaChevronDown />
        </div>
      </S.SelectGroup>
    </S.Container>
  );
};

export default Select;
