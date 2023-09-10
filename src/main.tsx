import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './lib/globalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { AppTheme } from './lib/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={AppTheme}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
);
