import { renderFormFieldChildren } from '../../../utils/renderFormFieldChildren';

import * as S from './styles';

const Section = ({
  sectionTitle,
  values,
  errors,
  handleChange,
  resetField,
  children,
  reversible,
}) => {
  return (
    <S.Container>
      <h2>{sectionTitle}</h2>
      <S.Children reversible={reversible}>
        {renderFormFieldChildren({
          children,
          values,
          errors,
          handleChange,
          resetField,
        })}
      </S.Children>
    </S.Container>
  );
};

export default Section;
