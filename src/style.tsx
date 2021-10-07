import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-app: hsl(198, 20%, 66%);
    --inset-shadow-1: inset 0 0 4px hsla(0, 0%, 0%, 0.3);
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
    overflow-y: scroll;
  }

  a {
    color: inherit;
  }

  .media-px {
    padding-left: 24px;
    padding-right: 24px;

    ${({ theme }) => theme.breakpoints.down('xs')} {
      padding-left: 14px;
      padding-right: 14px;
    }
  }

  .no-shrink {
    flex-shrink: 0;
  }

  .f-wrap {
    flex-wrap: wrap;
  }
`;

export default GlobalStyle;
