import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import Header from './assets/header';
import Body from './assets/body';
import Footer from './assets/footer';
import { PAGE_PATHS } from './config/project';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        {PAGE_PATHS.map((path, i) => (
          <Route
            key={i}
            path={path}
            element={<Body path={path} />}
          />
        ))}
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
