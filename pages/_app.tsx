import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import { GlobalStyle, ThemeProvider } from '@/src/styles';
import theme from '@/src/styles/theme';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <ThemeProvider>
    <GlobalStyle theme={theme} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
