import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gradientSecondary};
  padding: 0.5rem;
  padding-bottom: 0.25rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  svg {
    color: ${({ theme }) => theme.colors.textHighContrast};
  }
`;
