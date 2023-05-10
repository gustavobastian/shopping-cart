import '../styles/Header.css';
import { Link,BrowserRouter } from "react-router-dom";
import { GiCommercialAirplane } from "@react-icons/all-files/gi/GiCommercialAirplane";
import { GiShoppingCart } from "@react-icons/all-files/gi/GiShoppingCart";

import {useState} from "react";

function Header() {
  const [state,setState]=useState(true);


  const expandMenu=()=>{
    console.log("here")
    setState(true);
  }

  const closeMenu=()=>{
    console.log("closing")
    setState(false);
  }  

  return (
    <div className="headerClass">
       <div className="leftSpace">
        <div className='Logo'>
        <GiCommercialAirplane/>BSPLANES </div>
       </div>        
       <div className="rightSpace">
        
        <a className='linkStyle' href="/">Home</a>
        <a className='linkStyle' href="/about">About</a>
        <a className='linkStyle' href="/shop">Shop</a>
        <a className='linkStyle' href="/cart"><GiShoppingCart/></a>  
       </div> 
      
    </div>
  );
}

export default Header;
