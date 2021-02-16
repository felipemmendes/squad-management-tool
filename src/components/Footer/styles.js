import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.footerBg};

  p {
    color: ${({ theme }) => theme.colors.textLowContrast};
    font-weight: lighter;
    font-size: 0.7rem;
  }
`;
