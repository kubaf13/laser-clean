import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}

export type ViewportName = 'desktop' | 'tablet' | 'mobile';
export type Variants = '100' | '200' | '300';

export interface Palette {
  primary: string;
  secondary: string;
  brownPalette: {
    [key in Variants]: string;
  };
  accentPalette: {
    [key in Variants]: string;
  };
  darkPalette: {
    [key in Variants]: string;
  };
  grey: string;
  gradients: {
    basic: string;
  };
}

export interface Theme {
  palette: Palette;
  maxWidth: string;
  media: {
    [key in ViewportName]: string;
  };
  fonts: {
    lato: string;
    brunoAce: string;
  };
}
