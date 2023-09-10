import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.BACKGROUND};
    color: ${({ theme }) => theme.colors.TEXT};
    font-family: ${({ theme }) => theme.fontFamilies.default};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
