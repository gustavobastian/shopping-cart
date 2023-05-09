import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';

import Footer from './components/footer';
import RouteSwitch from './RouteSwitch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <Header/>
    <RouteSwitch/>
    <Footer/>
  </React.StrictMode>
);
