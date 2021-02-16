import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    text-transform: uppercase;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textLowerContrast};
  }
`;

export const Children = styled.div`
  flex-direction: ${(props) =>
    props.reversible ? 'column-reverse' : 'column'};
  align-items: center;
  display: flex;
  padding: 3rem 2rem 2rem;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 1240px) {
    padding: 3rem 6rem 2rem;
  }
`;
