
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import uniqid from 'uniqid';
import { useState,useEffect,useReducer } from "react";


const RouteSwitch = () => {

  const [buyList,setBuyList]=useState({list:[{"id":0,"name":"","price":"","IdOp":uniqid(),"quantity":0}]});


  
  const [ignored,forceupdate]=useReducer(x=>x+1,0);

  
  useEffect(()=>{
      localStorage.setItem('data', JSON.stringify(buyList.list));
      forceupdate();
      
    },[buyList.list]);



  const addElement=(value)=>{    
    console.log(ignored);
    setBuyList({list:buyList.list.concat(value)});    
    return 1;
  }


  const removeElement=(value)=>{
    let newBuyList=[];
    buyList.list.forEach(element => {
      if(element.IdOp!==value){
        newBuyList.push(element);
      }
    });
    setBuyList({list:newBuyList});    
    return 1;
  }


  const finish=()=>{    
    setBuyList({list:[{"id":0,"name":"","price":"","IdOp":uniqid(),"quantity":0}]});    
    return 1;
  }

  return (
    <BrowserRouter>      
      <Routes>        
        <Route path="/" element={<Home value={buyList}/>} />
        <Route path="/about" element={<About value={buyList} />} />
        <Route path="/shop" element={<Shop value={buyList} addElement={(element)=>{addElement(element)}} />} />
        <Route path="/cart" element={<Cart value={buyList} removeElement={(element)=>{removeElement(element)}} finish={finish}/>} />
         {/* 👇️ only match this when no other routes match */}
         <Route
            path="*"
            element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;