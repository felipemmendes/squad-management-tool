import { render } from '@testing-library/react';
import React from 'react';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import playersReducer from './store/players/slice';
import teamsReducer from './store/teams/slice';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes';
import { Router } from 'react-router-dom';
import history from './routes/history';

const customRender = (
  ui,
  {
    initialState,
    store = configureStore({
      reducer: combineReducers({
        players: playersReducer,
        teams: teamsReducer,
      }),
      preloadedState: initialState,
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </Router>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { customRender as render };
