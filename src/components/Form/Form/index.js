import { renderFormFieldChildren } from '../../../utils/renderFormFieldChildren';
import * as S from './styles';

const Form = ({
  fieldValues,
  setFieldValues,
  resetFieldValue,
  errors,
  handleSubmit,
  children,
}) => {
  return (
    <S.Container onSubmit={handleSubmit}>
      {renderFormFieldChildren({
        children,
        values: fieldValues,
        errors,
        handleChange: setFieldValues,
        resetField: resetFieldValue,
      })}
    </S.Container>
  );
};

export default Form;
