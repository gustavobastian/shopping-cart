import '../styles/quantity.css';

import { useEffect,useState,useReducer } from 'react';

function QuantityItem(props){
    const [quantity,setQuantity]= useState(0);
    const [ignored,forceupdate]=useReducer(x=>x+1,0);
    useEffect(()=>{
      forceupdate();
    },[quantity,props.value.list]);

    
    const incQ=()=>{
      props.increaseQuantity(quantity+1);
      console.log(ignored);
      setQuantity(quantity+1);
      
    }
    const decQ=()=>{
      props.decreaseQuantity(quantity-1);
      setQuantity(quantity-1);
      
    }

  return (
    <div className="quantity">        
      <div>Quantity</div>
      <div className="boxQuantity">
        <input id='item_{props.value.id}' className="quantityInput" type="text" placeholder='0' value={quantity}/>
        <div className="quantityButtons">
            <button className="QButtons" onClick={incQ}>+</button>      
            <button className="QButtons" onClick={decQ}>-</button>      
        </div>
      </div>
        
    </div>
  );
}

export default QuantityItem;