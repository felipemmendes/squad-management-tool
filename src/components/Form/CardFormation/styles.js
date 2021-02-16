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

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.transparentFillPrimary};
  border: 1px solid ${({ theme }) => theme.colors.transparentBorder};
  border-radius: 50%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    background: transparent;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23CCCCCCFF' stroke-width='1' stroke-dasharray='8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 50%;
  }

  svg {
    color: ${({ theme }) => theme.colors.textHighContrast};
    width: 0.8rem;
    height: 0.8rem;
  }

  @media (min-width: 550px) {
    width: 4rem;
    height: 4rem;

    &:before {
      width: 4.5rem;
      height: 4.5rem;
    }
  }

  @media (min-width: 769px) {
    width: 3rem;
    height: 3rem;

    &:before {
      width: 3.5rem;
      height: 3.5rem;
    }
  }

  @media (min-width: 1240px) {
    width: 4rem;
    height: 4rem;

    &:before {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
`;
