import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}

export type ViewportName = 'desktop' | 'tablet' | 'mobile';

export interface Palette {
  primary: string;
  secondary: string;
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
