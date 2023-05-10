import '../styles/Header.css';
import { Link,BrowserRouter } from "react-router-dom";

/*
<BrowserRouter basename="/">
          <Link  to="/">Home</Link>
          <Link  to="/about">About</Link>
          <Link  to="/shop">Shop</Link>       
       </BrowserRouter>
 */

function Header() {
  return (
    <div className="headerClass">
       <div className="leftSpace">
        <div className='Logo'>Logo</div>
       </div>        
       <div className="rightSpace">
        <button className="hamburger">
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
        className="navigation-menu">
          <ul>
            
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Shop</a></li>
          
          </ul>
        </div>  
        <p>Cart</p>  
       </div> 
      
    </div>
  );
}

export default Header;
