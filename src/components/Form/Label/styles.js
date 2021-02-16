import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  color: ${(props) =>
    props.hasError
      ? props.theme.colors.textError
      : props.theme.colors.textPrimary};
`;
