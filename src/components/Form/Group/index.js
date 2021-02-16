import { renderFormFieldChildren } from '../../../utils/renderFormFieldChildren';

import * as S from './styles';

const Group = ({ values, errors, handleChange, resetField, children }) => {
  return (
    <S.Container>
      {renderFormFieldChildren({
        children,
        values,
        errors,
        handleChange,
        resetField,
      })}
    </S.Container>
  );
};

export default Group;
