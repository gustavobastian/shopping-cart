import '../styles/Header.css';

function Header() {
  return (
    <div className="headerClass">
       <div className="leftSpace">
        <p>Logo</p>
       </div> 
       <div className="rightSpace">
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>       
        <p>cart</p>  
       </div> 
      
    </div>
  );
}

export default Header;
