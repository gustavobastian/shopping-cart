import '../styles/Cart.css';
import { useEffect,useState,useReducer } from 'react';

function Cart(props) {
  
    const [state,setState]=useState(props.value);
    const [ignored,forceupdate]=useReducer(x=>x+1,0);

    console.log(JSON.stringify(props.value))
    useEffect(()=>{
        console.log("altered")        
        console.log(JSON.stringify(props.value.list))     
        forceupdate();
      },[props.value.list]);

  return (
    <div className="CartForm">        
      <h1>Cart:</h1>
      <ul>
      {props.value.list.map((element)=>{
        return  <li key={element.IdOp}><div>{element.name}":"{element.price}</div></li>
        })}
      </ul>  
    </div>
  );
}

export default Cart;