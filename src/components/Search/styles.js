import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.separator};

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    margin: 1rem 3rem 3rem;
    animation: ${spin} 2s linear infinite;
  }
`;
