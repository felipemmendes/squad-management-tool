import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.contentBg};
  min-width: 50%;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.colors.shadow};
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1rem;
  width: 100%;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};

  h1 {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-size: 1.5rem;
  }

  @media (min-width: 376px) {
    height: 5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem 1.5rem;

  @media (min-width: 550px) {
    flex-direction: row;
  }

  @media (min-width: 769px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
