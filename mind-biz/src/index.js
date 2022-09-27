import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app';

const root = document.getElementById('mindbiz-root');
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root,
);
