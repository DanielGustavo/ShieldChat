import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-black: #24292E;
    --color-gray: #2E343B;
    --color-light-gray: #5F6D7A;
    --color-theme-dark: #716EE8;
    --color-dark-gray: #515356;
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

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-dark-gray);
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-gray);
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-light-gray);
  }
`;
