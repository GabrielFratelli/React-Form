import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  max-width: 1920px;
}

body {
  /* width: 100vw;
  height: 100vh; */

  font-family: 'Lato', sans-serif;
  color: var(--white);
  background: var(--background);

  -webkit-font-smoothing: antialiased;
}

button, input, select, option {
cursor: pointer;
}



:root {
  --background: #041E42;
  --white: #fff;
  --black: #2e2e2e;
  --red: #8b0000;
  --opaco: #f8f8ff;
}

`;
