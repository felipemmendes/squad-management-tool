import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  border: none;
  background: none;
  margin: 0.3rem;

  &:hover:before {
    content: '${(props) => props.tooltip}';
    position: absolute;
    bottom: 1.5rem;
    right: -0.5rem;
    background-color: #242124;
    padding: 0.3rem 0.8rem;
    border-radius: 3px;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.textHighContrast};
  }
  &:hover:after {
    content: '';
    position: absolute;
    bottom: 1rem;
    right: 0.2rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.textPrimary} transparent;
    border-width: 0.5rem 0.25rem 0 0.25rem;
  }

  svg {
    height: 0.6rem;
    width: 0.6rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
