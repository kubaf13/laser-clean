import Footer from '@molecules/Footer';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import { GlobalStyle, ThemeProvider } from '@/styles';
import theme from '@/styles/theme';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <ThemeProvider>
    <GlobalStyle theme={theme} />
    <Component {...pageProps} />
    <Footer />
  </ThemeProvider>
);

export default App;
