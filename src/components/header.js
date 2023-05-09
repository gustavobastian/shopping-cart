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
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/shop">Shop</a>
        <p>Cart</p>  
       </div> 
      
    </div>
  );
}

export default Header;
