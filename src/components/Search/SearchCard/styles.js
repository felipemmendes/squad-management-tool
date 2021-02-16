import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  background: ${({ theme }) => theme.colors.gradientTertiary};
  border-radius: 5px;
  position: relative;

  @media (min-width: 769px) {
    flex-direction: column;
  }

  @media (min-width: 850px) {
    flex-direction: row;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23BBBBBBFF' stroke-width='1' stroke-dasharray='6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }

  div {
    display: flex;
    flex-direction: column;

    @media (min-width: 769px) {
      & + div {
        margin-top: 0.3rem;
      }
    }

    @media (min-width: 850px) {
      & + div {
        margin-top: 0;
      }
    }
  }

  p {
    color: ${({ theme }) => theme.colors.textQuarternary};

    & + p {
      margin-top: 0.3rem;
    }
  }

  strong {
    color: #242124;
    margin-right: 0.3rem;
  }
`;
