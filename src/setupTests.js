// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes';
import { Router } from 'react-router-dom';
import history from './routes/history';

const AllTheProviders = ({ children }) => {
  return (
    <Router history={history}>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </Router>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
