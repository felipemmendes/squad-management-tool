import styled from 'styled-components';

import { Input } from '../../Input/styles';

export const Container = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  margin-top: 0.5rem;
  font-weight: normal;
  color: ${(props) =>
    props.isChecked
      ? props.theme.colors.textQuarternary
      : props.theme.colors.textPlaceholder};

  & + label {
    margin-left: 2rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.5rem;
    border: ${(props) =>
      props.hasError
        ? `1px solid ${props.theme.colors.borderError}`
        : `1px solid ${props.theme.colors.borderPrimary}`};
    border-radius: 50%;
  }
`;

export const Radio = styled(Input)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  padding: 0;
  border: none;
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;

  &:checked {
    border: 2px solid ${({ theme }) => theme.colors.contentBg};
    background: ${({ theme }) => theme.colors.gradientSecondary};
  }
`;
