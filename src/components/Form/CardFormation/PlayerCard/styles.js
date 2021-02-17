import styled, { css } from 'styled-components';

const tooltip = css`
  content: '${(props) => props.player && props.player.name}';
  position: absolute;
  top: -2rem;
  right: 0;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textHighContrast};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme, hasPlayer }) =>
    hasPlayer ? theme.colors.contentBg : theme.colors.transparentFillPrimary};
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

  &:hover:after {
    ${(props) => props.player && tooltip}
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

export const Player = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
`;
