import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.contentBg};
  width: 100%;
  height: 100%;
  margin: 1rem 0.5rem 1rem;

  @media (min-width: 769px) {
    margin: 1rem 0.5rem 1rem;
  }

  @media (min-width: 1024px) {
    margin: 0;
    & + div {
      margin-left: 1rem;
      margin-top: 0;
    }
  }

  h2 {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.darkContentBg};
  border-radius: 10px;
  padding: 0 0.2rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.contentBg};
  margin: 0.2rem 0;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.contentBg};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderHover};
  }
`;
