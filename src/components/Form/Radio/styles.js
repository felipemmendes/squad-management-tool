import styled from 'styled-components';

import { Container as Label } from '../Label/styles';

export const Container = styled(Label).attrs({
  as: 'fieldset',
})`
  display: flex;
  border: none;
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;

  div {
    display: flex;
  }
`;
