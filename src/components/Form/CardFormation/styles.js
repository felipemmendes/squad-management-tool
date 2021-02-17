import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.gradientSecondary};
  width: 100%;
  height: 20rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  padding: 1rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.borderSecondary};
    width: 100%;
    height: 1px;
    top: 10rem;
  }

  &:before {
    content: '';
    position: absolute;
    border: 1px solid ${({ theme }) => theme.colors.borderSecondary};
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    top: 8.5rem;
  }

  @media (min-width: 550px) {
    height: 35rem;

    &:after {
      top: 17.5rem;
    }

    &:before {
      height: 6rem;
      width: 6rem;
      top: 14.5rem;
    }
  }

  @media (min-width: 769px) {
    height: 25rem;

    &:after {
      top: 12.5rem;
    }

    &:before {
      height: 4rem;
      width: 4rem;
      top: 10.5rem;
    }
  }

  @media (min-width: 1240px) {
    height: 35rem;
    &:after {
      top: 17.5rem;
    }

    &:before {
      height: 6rem;
      width: 6rem;
      top: 14.5rem;
    }
  }
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Player = styled.div`
  display: flex;
  align-items: initial;
  margin: 1rem 0;
`;
