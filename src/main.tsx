import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import GlobalStyle from './lib/globalStyles.ts';
import App from './App.tsx';
import { AppTheme } from './lib/theme.ts';
import store from './stores';
import LanguageProvider from './lib/languageProvider.tsx';

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
