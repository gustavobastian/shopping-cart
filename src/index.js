import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Footer from './components/footer';
import RouteSwitch from './RouteSwitch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>        
    <RouteSwitch/>
    <Footer/>
  </React.StrictMode>
);
