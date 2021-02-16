import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { store, persistor } from './store/store';

import Routes from './routes';
import history from './routes/history';

import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/themes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={defaultTheme}>
            <Routes />
            <GlobalStyle />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
