import styled from 'styled-components';

import { Input } from '../Input/styles';

export const TextArea = styled(Input).attrs({
  as: 'textarea',
})`
  resize: none;
  height: 11rem;
`;
