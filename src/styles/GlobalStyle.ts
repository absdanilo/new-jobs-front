import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', sans-serif;;
  }

  html {
    background: linear-gradient(90deg,#031149,#025b8e 51%,#00d4ff);
  }
`;
