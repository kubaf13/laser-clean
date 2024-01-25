import { createGlobalStyle } from 'styled-components';

import type { Theme } from './types';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
