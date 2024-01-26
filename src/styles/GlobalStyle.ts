import { createGlobalStyle } from 'styled-components';

import type { Theme } from './types';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.lato};
    background: ${({ theme }) => theme.palette.grey};
  }
  
  main {
      max-width: ${({ theme }) => theme.maxWidth};
      margin: 0 auto;
  }
  
  hr {
      border: none;
  }
  
  h1 {  
    font-family: ${({ theme }) => theme.fonts.brunoAce};
    font-size: 32px;
      
    @media ${({ theme }) => theme.media.tablet} {  
        font-size: 48px;  
    }
  }
`;

export default GlobalStyle;
