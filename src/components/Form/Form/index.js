import { renderFormFieldChildren } from '../../../utils/renderFormFieldChildren';
import * as S from './styles';

const Form = ({
  values,
  handleChange,
  resetField,
  errors,
  handleSubmit,
  children,
}) => {
  return (
    <S.Container onSubmit={handleSubmit}>
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

export default Form;
