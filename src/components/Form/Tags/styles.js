import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  height: 6rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: 3px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.7rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tagsBg};
  padding: 0.15rem 0.3rem 0.15rem 0.6rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.textHighContrast};
  font-weight: normal;
  margin: 0.2rem 0;
  margin-right: 0.5rem;
  word-break: break-all;

  button {
    display: flex;
    background: none;
    border: none;
    margin-left: 0.5rem;

    svg {
      width: 0.7rem;
      height: 0.7rem;
      color: ${({ theme }) => theme.colors.textHighContrast};
      text-orientation: center;
    }
  }
`;

export const Input = styled.li`
  margin: 0.3rem 0;
  input {
    font-size: 0.7rem;
    border: none;
  }
`;
