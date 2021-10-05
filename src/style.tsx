import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-app: hsl(198, 20%, 66%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--bg-app);
    word-wrap: break-word;
  }
`;

export default GlobalStyle;
