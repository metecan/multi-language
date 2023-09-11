import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import App from './App.tsx';
import GlobalStyle from './lib/globalStyles.ts';
import LanguageProvider from './lib/languageProvider.tsx';
import { AppTheme } from './lib/theme.ts';
import store from './stores';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <LanguageProvider>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </Provider>,
);
