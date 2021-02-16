import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 125%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: sans-serif;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;
