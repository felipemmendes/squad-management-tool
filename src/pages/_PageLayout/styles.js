import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 1rem;
  min-height: calc(100vh - 5rem);

  @media (min-width: 769px) {
    flex-direction: row;
    padding: 2rem;
  }
`;
