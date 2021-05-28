import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html,
  body {
    overflow-x: hidden;
    background: linear-gradient(#320d3e, #9198e5);
    height: 100%;
  }
`;

export default GlobalStyle;