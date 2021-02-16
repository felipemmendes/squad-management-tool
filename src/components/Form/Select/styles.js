import styled from 'styled-components';

import { Input } from '../Input/styles';
import { Container as Label } from '../Label/styles';

export const Container = styled(Label)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 550px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const SelectGroup = styled(Input).attrs({
  as: 'div',
})`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: 3px;
  padding: 0;
  position: relative;

  @media (min-width: 550px) {
    margin-left: 2rem;
  }

  &:after {
    content: '';
    position: absolute;
    right: 1.5rem;
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.borderPrimary};
  }

  div {
    position: absolute;
    right: 0;
    z-index: 1;
  }

  svg {
    margin: 0 0.4rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    width: 0.7rem;
    height: 0.7rem;
  }
`;

export const Select = styled.select`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  font-weight: bold;
  border: none;
  margin: 0;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.3rem 3rem 0.3rem 1rem;
  z-index: 2;
`;
