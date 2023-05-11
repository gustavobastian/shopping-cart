
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import uniqid from 'uniqid';
import { useState,useEffect,useReducer ,React } from "react";


const RouteSwitch = () => {

  const [buyList,setBuyList]=useState({list:[{"id":0,"name":"","price":"","IdOp":uniqid()}]});


  
  const [ignored,forceupdate]=useReducer(x=>x+1,0);

  
  useEffect(()=>{
      console.log("altered")        
      console.log(JSON.stringify(buyList.list))     
      localStorage.setItem('data', JSON.stringify(buyList.list));
      forceupdate();
      
    },[buyList.list]);



  const addElement=(value)=>{
    console.log("on top:"+JSON.stringify(value));    
    
    setBuyList({list:buyList.list.concat(value)});
    console.log(JSON.stringify(buyList.list));
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