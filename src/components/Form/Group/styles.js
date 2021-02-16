import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;

  @media (min-width: 769px) {
    width: 50%;
    padding: 0;

    & + div {
      margin-left: 3rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;
