import styled from 'styled-components';

import { Container as Button } from '../../Button/styles';

export const Container = styled(Button)`
  color: ${({ theme }) => theme.colors.textHighContrast};
  font-weight: bold;
  padding: 0.7rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
