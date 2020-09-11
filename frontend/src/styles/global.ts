import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-black: #24292E;
    --color-theme: #9B99E0;
    --color-green: #78EE76;
    --color-red: #F05050;
    --color-white: #FFFFFF;
  }

  * {
    outline-color: var(--color-theme);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--color-white);
    background: var(--color-black);
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
