import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.3rem 0.5rem;
  font-size: 0.7rem;
  border: solid 1px
    ${(props) =>
      props.hasError
        ? props.theme.colors.borderError
        : props.theme.colors.borderPrimary};
  border-radius: 3px;
  margin: 0.5rem 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }

  &:focus {
    border-color: #242124;
  }
`;
