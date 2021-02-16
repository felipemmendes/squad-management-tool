import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: ${({ theme }) => theme.colors.textHighContrast};
  font-weight: bold;

  @media (min-width: 769px) {
    padding: 0 2rem;
  }
`;

export const AppInfo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textHighContrast};

  img {
    height: 2rem;
    margin-right: 1rem;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.contentBg};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-left: 0.5rem;
`;
