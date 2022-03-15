import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font: 500 1rem Poppins, sans-serif;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: Poppins, sans-serif;
  }
  button {
    cursor: pointer;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  @media(max-width: 520px) {
    html {
      font-size: 75%;
    }
  }
`;
