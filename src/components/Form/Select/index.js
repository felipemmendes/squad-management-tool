import { FaChevronDown } from 'react-icons/fa';

import * as S from './styles';

const Select = ({ label, name, id, onChange, selectOptions }) => {
  return (
    <S.Container htmlFor={id}>
      {label}
      <S.SelectGroup>
        <S.Select
          id={id}
          name={name}
          onChange={onChange}
          defaultValue={selectOptions[0].value}
        >
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
