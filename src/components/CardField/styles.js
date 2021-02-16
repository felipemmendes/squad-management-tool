import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.gradientSecondary};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 2rem;
  padding: 1rem;

  @media (min-width: 500px) {
    flex-direction: row;
    padding: 2rem 1rem;
  }

  @media (min-width: 769px) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 2rem 1rem;
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem 1rem;
  color: ${({ theme }) => theme.colors.textHighContrast};
  font-weight: bold;
  text-align: center;
  position: relative;

  & + div:after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.borderPrimary};
    width: calc(100% + 2rem);
    height: 1px;
    top: 0;
  }

  & + div:before {
    content: '';
    position: absolute;
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    top: -1.5rem;
  }

  @media (min-width: 500px) {
    padding: 0 1rem;

    & + div:after {
      height: calc(100% + 4rem);
      width: 1px;
      left: 0;
      top: auto;
    }

    & + div:before {
      left: -1.5rem;
      top: auto;
    }
  }

  @media (min-width: 769px) {
    padding: 2rem 1rem 1rem;

    & + div:after {
      height: 1px;
      width: calc(100% + 2rem);
      top: 0;
      left: auto;
    }

    & + div:before {
      left: auto;
      top: -1.5rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 1rem;

    & + div:after {
      height: calc(100% + 4rem);
      width: 1px;
      left: 0;
      top: auto;
    }

    & + div:before {
      left: -1.5rem;
      top: auto;
    }
  }
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
  margin-top: 1rem;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.contentBg};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: 1250px) {
    font-size: 1.5rem;
    width: 6rem;
    height: 6rem;
  }
`;

export const Picked = styled.div`
  display: flex;
  flex-direction: column;
  height: min-content;
  padding-right: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textHighContrast};

  @media (min-width: 1250px) {
    padding-right: 1rem;
  }
`;
