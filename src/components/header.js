import '../styles/Header.css';
import { Link,BrowserRouter } from "react-router-dom";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
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
  <div onClick={expandMenu.bind(this,'')} className="hamburger">
          <GiHamburgerMenu/>
        </div>
  return (
    <div className="headerClass">
       <div className="leftSpace">
        <div className='Logo'>Logo</div>
       </div>        
       <div className="rightSpace">
        
        <a className='linkStyle' href="/">Home</a>
        <a className='linkStyle' href="/about">About</a>
        <a className='linkStyle' href="/shop">Shop</a>
        <p className='linkStyle'>Cart</p>  
       </div> 
      
    </div>
  );
}

export default Header;
