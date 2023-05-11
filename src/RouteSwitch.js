import React from "react";
import { HashRouter,BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import { useState } from "react";


const RouteSwitch = () => {

  const [buyList,setBuyList]=useState({list:[{"id":0,"name":"","price":""}]});

  const addElement=(value)=>{
    console.log("on top:"+JSON.stringify(value));    
    let myString = JSON.stringify(value);
    
    let myObject=JSON.parse(myString);
    
    
    setBuyList({list:buyList.list.concat(value)});
    return 1;
  }

  return (
    <BrowserRouter>      
      <Routes>        
        <Route path="/" element={<Home value={buyList}/>} />
        <Route path="/about" element={<About value={buyList} />} />
        <Route path="/shop" element={<Shop value={buyList} addElement={(event)=>{addElement(event)}} />} />
        <Route path="/cart" element={<Cart value={buyList}/>} />
         {/* 👇️ only match this when no other routes match */}
         <Route
            path="*"
            element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;