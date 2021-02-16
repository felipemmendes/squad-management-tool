import styled from 'styled-components';

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (min-width: 769px) {
    width: 50%;
    margin-bottom: 0;
    margin-left: 1rem;
  }

  @media (min-width: 1024px) {
    width: 100%;
    margin-left: 2rem;

    & > div {
      margin-bottom: 2rem;
    }
  }
`;
