import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import reportWebVitals from './reportWebVitals';

import NavBar from './components/nav-bar/nav';
import Home from './Pages/home-page/homePage';

import './index.css';


ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
