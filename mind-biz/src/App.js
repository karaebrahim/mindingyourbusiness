import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { images } from './images';
import theme from './config/theme';
import Header from './assets/header';
import Body from './assets/body';
import Footer from './assets/footer';
import About from './assets/about';
import Services from './assets/services';
import Contact from './assets/contact';

const Container = styled.div`
  width: 980px;
  margin: 0 auto;
  background-image: url(${images.paper});
  background-repeat: repeat;
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.2);

  h1 {
    font-family: 'Noto Sans', sans-serif;
    font-weight: normal;
    color: ${props => props.theme.secondary};
    margin: 0;
  }
   
  h2 {
    font-family: 'Noto Sans', sans-serif;
    font-weight: normal;
  }
   
  img {
    max-width: 980px;
  }

  b {
    color: ${props => props.theme.secondary};
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Routes>
          <Route exact path='/' element={<Body/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
