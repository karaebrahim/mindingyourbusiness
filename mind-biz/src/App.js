import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import Header from './assets/header';
import Body from './assets/body';
import Footer from './assets/footer';
import About from './assets/about';
import Services from './assets/services';
import Contact from './assets/contact';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route exact path='/' element={<Body/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
