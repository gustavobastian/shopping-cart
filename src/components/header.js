import '../styles/Header.css';
import React  from 'react';


import { GiCommercialAirplane } from "@react-icons/all-files/gi/GiCommercialAirplane";
import { GiShoppingCart } from "@react-icons/all-files/gi/GiShoppingCart";
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <div className="headerClass">
       <div className="leftSpace">
        <div className='Logo'>
        <GiCommercialAirplane/>BSPLANES </div>
       </div>        
       <div className="rightSpace">
        
        <Link className='linkStyle' to="/home">Home</Link>
        <Link className='linkStyle' to="/about">About</Link>
        <Link className='linkStyle' to="/shop">Shop</Link>
        <Link className='linkStyle' to="/cart"><GiShoppingCart/></Link>  
       </div> 
      
    </div>
  );
}

export default Header;
