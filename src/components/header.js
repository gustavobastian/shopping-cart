import '../styles/Header.css';

import { GiCommercialAirplane } from "@react-icons/all-files/gi/GiCommercialAirplane";
import { GiShoppingCart } from "@react-icons/all-files/gi/GiShoppingCart";



function Header(props) {

  const onClickHome=()=>{
  this.props.history.push('/');
  }
  const onClickCart=()=>{
    this.props.history.push('/cart');
    }
  return (
    <div className="headerClass">
       <div className="leftSpace">
        <div className='Logo'>
        <GiCommercialAirplane/>BSPLANES </div>
       </div>        
       <div className="rightSpace">
        
        <a className='linkStyle' href="/home">Home</a>
        <a className='linkStyle' href="/about">About</a>
        <a className='linkStyle' href="/shop">Shop</a>
        <a className='linkStyle' href="/cart"><GiShoppingCart/></a>  
       </div> 
      
    </div>
  );
}

export default Header;
