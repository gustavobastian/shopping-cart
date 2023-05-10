import React from "react";
import { HashRouter,BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";



const RouteSwitch = () => {


  return (
    <BrowserRouter>      
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
         {/* 👇️ only match this when no other routes match */}
         <Route
            path="*"
            element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;