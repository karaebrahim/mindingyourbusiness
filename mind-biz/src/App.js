import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import Header from './assets/header';
import Body from './assets/body';
import Footer from './assets/footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
