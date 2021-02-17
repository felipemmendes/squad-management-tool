import { useCallback } from 'react';
import { MdClose } from 'react-icons/md';

import * as S from './styles';
import Label from '../Label';

const Tags = ({
  label,
  id,
  name,
  onChange,
  value,
  tagsArr,
  addTag,
  deleteTag,
  resetField,
}) => {
  const handleKeyDown = useCallback(
    (event) => {
      const { key } = event;
      const { value } = event.target;

      if (key === 'Enter' || key === ';') {
        event.preventDefault();
        if (
          !value ||
          tagsArr.find((tag) => value.toLowerCase() === tag.toLowerCase())
        ) {
          return;
        }
        addTag(value);
        onChange({ target: { name: 'tags', value, changeType: 'addArr' } });
        resetField(name);
      } else if (key === 'Backspace' && !value && tagsArr.length) {
        deleteTag();
        onChange({ target: { name: 'tags', changeType: 'removeArr' } });
      } else {
        return;
      }
    },
    [addTag, deleteTag, resetField, tagsArr, onChange, name]
  );

  return (
    <Label label={label} inputId={id}>
      <S.List>
        {tagsArr.map((tag) => (
          <S.Item key={tag}>
            {tag}{' '}
            <button onClick={() => deleteTag(tag)}>
              <MdClose title="delete tag" />
            </button>
          </S.Item>
        ))}
        <S.Input>
          <input
            name={name}
            type="text"
            id={id}
            value={value}
            onKeyDown={handleKeyDown}
            onChange={onChange}
            size={value ? value.length + 1 : 1}
          />
        </S.Input>
      </S.List>
    </Label>
  );
};

export default Tags;
