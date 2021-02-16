import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import history from './routes/history';

import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/themes';

const App = () => {
  return (
    <Router history={history}>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
};

export default App;
