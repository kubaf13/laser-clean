import type { Theme } from './types';

export const breakpoints = {
  maxWidth: 1400,
  desktop: 1024,
  tablet: 768,
  mobile: 360,
};

const theme: Theme = {
  palette: {
    primary: '#000',
    secondary: '#fff',
    brownPalette: {
      '100': '#6B5844',
      '200': '#9A856f',
      '300': '#ffe6cf',
    },
    accentPalette: {
      '100': '#CDAF85',
      '200': '#CDAF85',
      '300': '#5D4A2B',
    },
    darkPalette: {
      '100': '#000',
      '200': '#161616',
      '300': '#2c2c2c',
    },
    grey: '#3F3F3F',
    gradients: {
      basic:
        'linear-gradient(90deg,rgba(255, 255, 255, 1) 0%,rgba(107, 88, 68, 1) 51.42%);',
    },
  },
  maxWidth: `${breakpoints.maxWidth}px`,
  media: {
    mobile: `screen and (max-width: ${breakpoints.tablet - 1}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
  },
  fonts: {
    lato: 'Lato',
    brunoAce: 'Bruno Ace',
  },
};

export default theme;
