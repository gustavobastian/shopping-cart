import '../styles/ItemComponent.css';
import React  from 'react';

import Quantity from './quantity'

function ItemComponent(props) {
    let valueLocal=props.value;        
    let quantity=0;

    const addItemLocal=()=>{        
        props.addItem(quantity)
    }

    const increaseQuantity=(value)=>{
      quantity=value;
    }

    const decreaseQuantity=(value)=>{
      quantity=value;
    }


  return (
    <div className="item">
        <h1>{valueLocal.name}</h1>
        <div className="linePrice">
          <img className="imageComponent" src={require("../images/plane_"+valueLocal.id+".jpg")} alt="not found"/>    
          <Quantity value={props.value} increaseQuantity={(value)=>{increaseQuantity(value)}} decreaseQuantity={(value)=>{decreaseQuantity(value)}}/>
        </div>
        <div className="linePrice">
          <div className='priceLabel'>Price:{valueLocal.price} USD</div> <div className='addButton' onClick={addItemLocal}>Buy</div>
        </div>       
    </div>
  );
}

export default ItemComponent;